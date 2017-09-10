import {Injectable} from "@angular/core";
import {MagicEngine} from "./magic.engine";
import {FormControl, FormGroup} from "@angular/forms";
import {ControlsMetadata, Records} from "../controls.metadata.model";
import {PropType} from "../ui/propType";
import {isNullOrUndefined, isUndefined} from "util";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {GuiCommand} from "./GuiCommand";

let counter = 0;

@Injectable()
export class TaskMagicService {

  _taskId: string;

  ScreenControlsData: ControlsMetadata = new ControlsMetadata();
  Records: Records = new Records();
  selectedRow: number = 0;
  protected template: { [id: string]: string; };

  settemplate(value: any) {
    this.template = value;
  }


  get ControlsMetadata() {
    return this.ScreenControlsData;
  }

  get taskId() {
    return this._taskId;
  }

  set taskId(value) {
    // debugger;
    this._taskId = value;
  }



   // row         : FormGroup;
   rows        : FormGroup[] = [];
   //refreshUInput:Subject<any> = new Subject();
   //refreshUInput:Observable<any>;
   refreshDom:Subject<GuiCommand> = new Subject();
  //sub:Subscription;



  constructor(protected magic: MagicEngine) {
    console.log(`task constructor: ${counter++}`);
  }

  buildRecords() {
    const group: FormGroup = new FormGroup({});//  this.rows[0];
    for (const key in this.template) {

      if (this.template[key] == '0')
        group.addControl(key, new FormControl('')); // instead of this.obj[key]
    }

    this.rows.push(group);
  }

  buildTableRecords() {
    const group: FormGroup = new FormGroup({});//  this.rows[0];
    for (const key in this.template) {

      if (this.template[key] == '1')
        group.addControl(key, new FormControl('')); // instead of this.obj[key]
    }

    this.rows.push(group);
  }


  startMagic() {
    this.magic.startMagic();
  }

   initTask(){
     let list: GuiCommand[];
     this.magic.refreshDom
       .filter(command=>command.TaskTag == this.taskId)
       .subscribe(command=>
     {
       console.log("Task " + command.TaskTag + "command " + command.CommandType);
      this.refreshDom.next(command);
     });
     // this.registerRefreshUI(data=>{
     //   let obj = JSON.parse(data);
     //   //console.dir(obj);
     //
     //   for (let command in list) {
     //
     //     this.refreshDom.next(list[command]);
     //   }
     //
     // });

     // subscribe to input updates
     //this.sub = this.refreshUInput
       //.subscribe( controlsValues =>{
         //this.record.patchValue(controlsValues);
       //});

    /* this.refreshDom = this.refreshUI
         .map( obj => obj.ControlsMetaData);*/

   }
   onDestoryTask(){
     //this.sub.unsubscribe();
   }

  get record() {
    return this.rows[0];
  }
   getTaskId(parentId, subformName) : string{
        return this.magic.getTaskId(parentId, subformName);
    }


  insertEvent(eventName: string, controlIdx: string, lineidx: string) {
    this.magic.insertEvent(this.taskId, eventName, controlIdx, lineidx);
  }


  registerGetValueCallback(cb) {
    this.magic.registerGetValueCallback(this.taskId, cb);
  }

   registerRefreshUI( cb) {
      this.magic.registerRefreshUI(this.taskId, cb);
   }

  registerRefreshTableUI(cb) {
    this.magic.registerRefreshTableUI(this.taskId, cb);
  }

  registerOpenSubformCallback(cb) {
    this.magic.registerOpenSubformCallback(this.taskId, cb);
  }

  getProperty(controlId: string, prop: PropType, rowId?: string) {
    if (isNullOrUndefined(rowId))
      return this.ScreenControlsData.getProperty(controlId, prop);
    else
      return this.Records.list[rowId].getProperty(controlId, prop);
  }

  getRecords() {
    return this.Records.data;
  }

  getValue(controlId: string, rowId?: string) {
    if (isNullOrUndefined(rowId))
      rowId = '0';
      //return this.ScreenControlsData.getValue(controlId);
   // else
    return this.Records.list[rowId].getValue(controlId);
  }

}

