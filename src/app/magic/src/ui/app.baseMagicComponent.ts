import {
  Component, OnInit, ChangeDetectorRef, Input, Injectable, OnDestroy, QueryList,
  ViewChildren
} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TaskMagicService} from "../services/task.magics.service";
import {MagicEngine} from "../services/magic.engine";
import {PropType} from "./propType";
import {isNullOrUndefined, isUndefined} from "util";
import {ControlsMetadata, HtmlProperties} from "../controls.metadata.model";
import {isBoolean} from "util";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

import {Subscription} from "rxjs/Subscription";
import {CommandType} from "./enums";
import {GuiCommand} from "../services/GuiCommand";
import {ComponentsList} from "../../../components";
import {ComponentsListBase} from "../../../ComponentsListBase";
import {MagicDirectiveDirective} from "./magic-directive.directive";

@Component({
  selector: 'task-magic',
  providers: [TaskMagicService]
})
export abstract class BaseTaskMagicComponent implements OnInit ,OnDestroy{

  ngOnDestroy(): void {
    this.refreshUI.complete();
    //this.sub.unsubscribe();
  }

  @Input() subformName: string;
  @Input() parentId: string;
  @Input() myTaskId: string;
  @Input() taskDescription: string;
  @ViewChildren(MagicDirectiveDirective) inFinder1: QueryList<MagicDirectiveDirective>
  subformsDict: { [x: string]: SubformDefinition } = {};
  public static  componentsListBase : ComponentsListBase;
  emptyComp:Component;

  refreshUI:Subject<any> = new Subject();
  //sub:Subscription;

  get controlProperties(): any {
    return this._controlProperties;
  }

  set controlProperties(value: any) {
    this._controlProperties = value;
  }



  ngAfterViewInit() {
    console.log("Before!!!!!!!!!!!!!");
    this.inFinder1.forEach(alertInstance => console.log(alertInstance));
    console.log("After!!!!!!!!!!!!!");
  }
  private _controlProperties: any;
  //persons: { [id: string]: string; };
  protected props: { [id: string]: { [id: string]: string; } };


  /*get rowId(){
   return this.task.rowId;
   }*/

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
  }

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
        //console.dir(a);
         switch (command.CommandType) {
           case CommandType.REFRESH_TASK:
             console.log("REFRESH_TASK");
             //this.task.ScreenControlsData.fromJson(a.str);
             // console.dir(obj.ControlsValues);
             this.task.ScreenModeControls.patchValue(this.task.ScreenControlsData.Values);
             this.ref.detectChanges();
             break;
           case CommandType.SET_TABLE_ITEMS_COUNT:
             console.log("SET_TABLE_ITEMS_COUNT " + command.number);
             if (!isUndefined(command.number))
               this.task.updateTableSize(command.number);
             this.ref.detectChanges();
             break;
           case CommandType.SET_VALUE:
             console.log(`BASE SET_VALUE: ${command.TaskTag},rowId = ${command.line} property:${command.CtrlName} value ${command.str}`);
             break;
         }

      });
  }

  gettext(controlId, rowId?){
    return this.task.getProperty(controlId,HtmlProperties.Text, rowId );
  }

  getImage(controlId, rowId?){
    let result = this.task.getProperty(controlId, HtmlProperties.Image, rowId);
    console.log("getImage = " + result);
    return result;

  }
  isImageExists(controlId, rowId?): boolean{
    let result = this.task.getProperty(controlId, HtmlProperties.Image, rowId);
    return !isNullOrUndefined(result);

  }
  // getStyle(controlId, rowId?) {
  //   let styles = {
  //     'background-color': 'red' ,
  //     'visibility': this.getvisible(controlId) ? 'visible' : 'hidden',
  //
  //   };
  //   return styles;}

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
  // getgetFormat(controlId, rowId?)
  // {
  //   return  this.task.getProperty(controlId, PropType.Format, rowId);
  // }

  GetValue(controlId){
    let val = this.task.getValue(controlId);
    console.log("Value = " + val);
    return val;
  }
}
interface SubformDefinition {
  formName:string;
  parameters:any;
}
