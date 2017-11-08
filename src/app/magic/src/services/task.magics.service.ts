import {Injectable} from "@angular/core";
import {MagicEngine} from "./magic.engine";
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {HtmlProperties, Records} from "../controls.metadata.model";
import {isNullOrUndefined, isUndefined} from "util";
import {Subject} from "rxjs/Subject";
import {GuiCommand} from "./GuiCommand";

let counter = 0;

@Injectable()
export class TaskMagicService {

  _taskId: string;


  Records: Records = new Records();
  protected template: { [id: string]: string; };

  settemplate(value: any) {
    this.template = value;
  }

  get ScreenControlsData() {
    return this.Records.list["0"];
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



  rows: Array<FormGroup> = [];
  ScreenModeControls: FormGroup;
  refreshDom: Subject<GuiCommand> = new Subject();



  constructor(protected magic: MagicEngine) {

  }

  buildScreenModeControls() {
    const group: FormGroup = new FormGroup({});
    for (const key in this.template) {

      if (this.template[key] == '0')
        group.addControl(key, new FormControl(''));
    }

    this.ScreenModeControls = group;
  }
  isTableControl(id:string):boolean{
    return this.template[id] == '1';
  }

  getFormControl(rowId:string,id:string):AbstractControl
  {
    let c: AbstractControl;
    let group:FormGroup = this.isTableControl(id)? this.rows[rowId] :this.ScreenModeControls;
    if (group.contains(id))
       c = group.controls[id];
    return c;
  }


  buildTableRowControls() {
    const group: FormGroup = new FormGroup({});

    for (const key in this.template) {

      if (this.template[key] == '1')
        group.addControl(key, new FormControl(''));
    }

    this.rows.push(group);
  }

  updateTableSize(size: number)
  {

    if (size == 0) //never remove row 0 for now
      size = 1;
    if (size < this.rows.length)
      this.rows.length = size;
    else
    {
      for (let i = this.rows.length;  i < size; i++)
        this.buildTableRowControls();
    }

    this.Records.updateSize(size);
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
       // console.log("Task " + command.TaskTag + "command " + command.CommandType);
      this.refreshDom.next(command);
     });

   }
   onDestoryTask(){
     //this.sub.unsubscribe();
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

  getProperty(controlId: string, prop: HtmlProperties, rowId?: string) {
    if (isNullOrUndefined(rowId))
      rowId = "0";
    return this.Records.list[rowId].getProperty(controlId, prop);
  }

  getClasses(controlId: string, rowId?: string): string {
     if (isNullOrUndefined(rowId))
       rowId = "0";
    return this.Records.list[rowId].getControlMetadata(controlId).classes;

  }

  getRecords() {
    return this.Records.data;
  }

  getValue(controlId: string, rowId?: string) {
    if (isNullOrUndefined(rowId))
      rowId = '0';

    return this.Records.list[rowId].getValue(controlId);
  }

}

