import {Component, OnInit, ChangeDetectorRef, Input, Injectable, OnDestroy} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TaskMagicService} from "../services/task.magics.service";
import {MagicEngine} from "../services/magic.engine";
import {PropType} from "./propType";
import {isNullOrUndefined, isUndefined} from "util";
import {ControlsMetadata} from "../controls.metadata.model";
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
  //subformsDict: { [x: string]: SubformDefinition } = {};


  refreshUI:Subject<any> = new Subject();
  //sub:Subscription;

  get controlProperties(): any {
    return this._controlProperties;
  }

  set controlProperties(value: any) {
    this._controlProperties = value;
  }

  get propType() {
    return PropType;
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
    return this.task.rows[0];
  }

  //items: FormGroup;
  get taskId() {
    return this.task.taskId;
  }

  protected getvalueCallback = (controlKey: string) => {
    if (this.record.contains(controlKey)) {
      return this.record.get(controlKey).value;
    }
  }

  constructor(protected ref: ChangeDetectorRef,
              protected task: TaskMagicService,
              //protected magic:MagicEngine

  ) {
    // debugger;
  }
  // getComp(subformName: string ): Component
  // {
  //   if (subformName in this.subformsDict) {
  //     let formName: string = this.subformsDict[subformName].formName;
  //     return ComponentsList.compHash[formName];
  //   }
  //   else
  //     return "";
  //
  // }
  //
  // getParameters(subformName: string ): any
  // {
  //   if (subformName in this.subformsDict) {
  //     return this.subformsDict[subformName].parameters;
  //   }
  //   else
  //     return "";
  //
  // }

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

    this.task.buildRecords();

    this.task.registerGetValueCallback(this.getvalueCallback);


    let firstTime: boolean = true;
    this.task.registerRefreshTableUI(data => {
        //alert(data);

        this.task.Records.fromJson(data);
        this.ref.detectChanges();
      }
    );


    this.task.initTask();
    this.regUpdatesUI();

    /*this.task.registerRefreshUI(data=>{
      this.refreshUI.next(data);
    });*/

/*    this.sub = this.task.refreshUInput.subscribe( obj =>{
          this.ref.detectChanges();
    });*/


  /*    data => {
        //TODO: move this code to taskservice

        this.task.ScreenControlsData.fromJson(data);
        // console.dir(obj.ControlsValues);
        this.record.patchValue(this.task.ScreenControlsData.Values);
        // if (firstTime) {
        //   firstTime = false;
        //   this.task.ScreenControlsData.ControlsProperties
        //
        // }


      }
    );*/


    // this.task.startMagic();


  }

  getRecords(): ControlsMetadata[] {
    return this.task.Records.list;
  }


  initializeMagic() {
    //myExtObject.registerGetValueCallback(this.GetValueCallback.bind(this));
  }

  GetValueCallback(taskId: number, controlId: string, rowId: number = 0): any {
    return
  }

  regUpdatesUI(){
    this.task
      .refreshDom
      //.filter(updates => updates.TaskTag == this.taskId)
      //.map(updates => updates.properties.Properties)
      .subscribe( a=> {


        let command: GuiCommand = a;
        console.dir(a);
         switch (command.CommandType) {
           case CommandType.CREATE_SUB_FORM:
             console.log("CREATE_SUB_FORM");
             // this.subformsDict[subformControlName] = {formName,
             //   parameters:{myTaskId: taskId, taskDescription: taskDescription}};

             alert('good!');

             this.ref.detectChanges();
             break;
         }
        //     this.renderer.setProperty(
        //       this.htmlElement,
        //       command.Operation,
        //       command.str
        //     );
        //     break;
        //   case  CommandType.SET_VALUE:
        //     this.task.record.controls[this.id].setValue(command.str);
        //     break;
        //   case CommandType.SET_ATTRIBITE:
        //     if (command.Operation == "readOnly" && command.str != "true"  )
        //       this.renderer.removeAttribute(this.htmlElement, command.Operation);
        //     else
        //       this.renderer.setAttribute(this.htmlElement, command.Operation, command.str);
        //     break;
        //
        // }
      });
  }
}
// interface SubformDefinition {
//   formName:string;
//   parameters:any;
// }
