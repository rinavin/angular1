import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {TaskMagicService} from "../services/task.magics.service";
import {isNullOrUndefined, isUndefined} from "util";
import {ControlMetadata, HtmlProperties} from "../controls.metadata.model";
import {Subject} from "rxjs/Subject";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

import {CommandType} from "./enums";
import {GuiCommand} from "./gui.command";
import {ComponentsListBase} from "../../../components.list.base";
import {MagicDirectiveDirective} from "./magic-directive.directive";

@Component({
  selector: 'task-magic',
  providers: [TaskMagicService]
})
export abstract class BaseTaskMagicComponent implements OnInit ,OnDestroy{



  @Input() subformName: string;
  @Input() parentId: string;
  @Input() myTaskId: string;
  @Input() taskDescription: string;
  @ViewChildren(MagicDirectiveDirective) inFinder1: QueryList<MagicDirectiveDirective>;
  subformsDict: { [x: string]: SubformDefinition } = {};
  public static  componentsListBase : ComponentsListBase;
  emptyComp:Component;

  refreshUI:Subject<any> = new Subject();


  get controlProperties(): any {
    return this._controlProperties;
  }

  set controlProperties(value: any) {
    this._controlProperties = value;
  }


  private _controlProperties: any;

  protected props: { [id: string]: { [id: string]: string; } };

  ngOnDestroy(): void {
    this.refreshUI.complete();
  }


  get table() {
    return this.task.rows;
  }

  get record() {
    return this.task.ScreenModeControls;
  }

  //items: FormGroup;
  get taskId() {
    return this.task.taskId;
  }

  protected getvalueCallback = (rowId: string, controlKey: string) => {
    let result = this.task.getFormControl(rowId,controlKey);
    if (!isNullOrUndefined(result))
      return result.value;
  };

  get screenFormGroup(): FormGroup {
    return this.record;
  }

  constructor(protected ref: ChangeDetectorRef,
              protected task: TaskMagicService,
              //protected magic:MagicEngine

  ) {
    this.task.Records.createFirst();
    // debugger;
  }
  getComp(subformName: string ): Component {
    if (subformName in this.subformsDict) {
      let formName: string = this.subformsDict[subformName].formName;
      return BaseTaskMagicComponent.componentsListBase.getComponents(formName);
    }
    else
      return this.emptyComp;
  }

  getParameters(subformName: string ): any
  {
    if (subformName in this.subformsDict) {
      return this.subformsDict[subformName].parameters;
    }
    else
      return "";

  }
  addSubformComp(subformControlName: string, formName: string, taskId: string, taskDescription: string)
  {
    this.subformsDict[subformControlName] = {formName,
           parameters:{myTaskId: taskId, taskDescription: taskDescription}};
    this.ref.detectChanges();
  }




  ngOnInit() {
    let obj: any;
    if (isUndefined(this.myTaskId)) {
      obj = JSON.parse(this.task.getTaskId(this.parentId, this.subformName));
      this.task.taskId = obj.TaskId;
      this.task.settemplate(obj.Names);
    }
    else {
      this.task.taskId = this.myTaskId;
      obj = JSON.parse(this.taskDescription);
      this.task.settemplate(obj);
    }
    this.task.buildScreenModeControls();
    this.task.registerGetValueCallback(this.getvalueCallback);
    this.task.registerRefreshTableUI(data => {
           this.task.Records.fromJson(data);
        this.ref.detectChanges();
      }
    );


    this.task.initTask();
    this.regUpdatesUI();

  }



  GetValueCallback(taskId: number, controlId: string, rowId: number = 0): any {
    return
  }

  getFormGroupByRow(id: string): FormGroup {
    return this.task.rows[id];
  }

  ifRowCreated(id: string):boolean{
    let result = this.getFormGroupByRow(id);
    return  !isNullOrUndefined(result);
  }

  regUpdatesUI(){
    this.task
      .refreshDom
      .filter(updates => updates.TaskTag == this.taskId)
      //.map(updates => updates.properties.Properties)
      .subscribe( a=> {


        let command: GuiCommand = a;
        let rowId: string = (command.line || 0).toString();
        let controlId = command.CtrlName;

        switch (command.CommandType) {
           case CommandType.REFRESH_TASK:

             this.task.ScreenModeControls.patchValue(this.task.ScreenControlsData.Values);
             this.ref.detectChanges();
             break;
           case CommandType.SET_TABLE_ITEMS_COUNT:
             if (!isUndefined(command.number))
               this.task.updateTableSize(command.number);
             this.ref.detectChanges();
             break;

           case CommandType.SET_PROPERTY:

             let properties: ControlMetadata;
             properties = this.task.Records.list[rowId].getControlMetadata(controlId);
             if (command.Operation == HtmlProperties.ItemsList) {
               // noinspection UnnecessaryLocalVariableJS
               const obj = JSON.parse(command.str);
               properties.properties[command.Operation] = obj;
             }
             else
               properties.properties[command.Operation] = command.str;
             break;
           case CommandType.SET_CLASS:
             properties = this.task.Records.list[rowId].getControlMetadata(controlId);
             properties.setClass(command.Operation,command.str);
             break;

           case  CommandType.SET_VALUE:
             this.task.Records.list[rowId].values[controlId] = command.str;
             let c = this.task.getFormControl( rowId, controlId);
             if (!isNullOrUndefined(c))
               c.setValue(command.str);
             else
               console.log("Not found control for " + controlId);
             break;
         }

      });
  }

  gettext(controlId, rowId?){
    return this.task.getProperty(controlId,HtmlProperties.Text, rowId );
  }

  getImage(controlId, rowId?){
    let result = this.task.getProperty(controlId, HtmlProperties.Image, rowId);
    return result;

  }
  isImageExists(controlId, rowId?): boolean{
    let result = this.task.getProperty(controlId, HtmlProperties.Image, rowId);
    return !isNullOrUndefined(result);

  }

  getClasses(controlId, rowId?) {
    //return 'one two ';
    return this.task.getClasses(controlId, rowId);
  }
  getvisible(controlId, rowId?) {
    let vis: Boolean = this.getProperty(controlId,HtmlProperties.Visible, rowId) == true;
    return vis;
  }

  getenable(controlId, rowId?) {
    let result = this.getProperty(controlId,HtmlProperties.Enabled, rowId) == true;
    return result;
  }
  isDisabled(controlId, rowId?) {
    let result = this.getProperty(controlId, HtmlProperties.Enabled, rowId);
    return result == 1 ? null : true;
  }
  getProperty(controlId: string, prop: HtmlProperties, rowId?: string) {
    return this.task.getProperty(controlId, prop, rowId);
  }

  gettitle(controlId, rowId?) {
    return this.task.getProperty(controlId, HtmlProperties.Tooltip, rowId );
  }

  getselectedvalue(controlId, rowId?) {
    return this.task.getProperty(controlId, HtmlProperties.SelectedValue, rowId );
  }

  getplaceholder(controlId, rowId?) {
    return this.task.getProperty(controlId, HtmlProperties.PlaceHolder, rowId );
  }

  gettype(controlId, rowId?) {
    return this.task.getProperty(controlId, HtmlProperties.Password, rowId ) ? "password" : "text";
  }

  gettabindex(controlId, rowId?) {
    return this.task.getProperty(controlId, HtmlProperties.TabIndex, rowId );
  }


  GetValue(controlId){
    let val = this.task.getValue(controlId);
    return val;
  }

  public onselectionchanged(event: Event, idx: string)
  {
    this.task.insertEvent('selectionchanged', idx, (<any>(event.target)).selectedIndex.toString());
  }

  oncheckchanged(event:Event, idx : string )
  {
    this.task.insertEvent('selectionchanged', idx, (<any>(event.target)).checked ? "1" : "0");
  }
}
interface SubformDefinition {
  formName:string;
  parameters:any;
}
