import {Injectable} from "@angular/core";
import {MagicEngine} from "./magic.engine";
import {FormControl, FormGroup} from "@angular/forms";
import {ControlsMetadata, Records} from "../controls.metadata.model";
import {PropType} from "../ui/propType";

let counter = 0;

@Injectable()
export class TaskMagicService {

   _taskId      : string;
    props: { [id: string]: { [id: string]: string; } };
    _records : Records;
    controlsMetadata_: ControlsMetadata = new ControlsMetadata();

   get ControlsMetadata(){ return this.controlsMetadata_; }
   get taskId(){ return this._taskId; }
   set taskId(value){
      debugger;
      this._taskId = value;
   }


   selectedRow : number;
   // row         : FormGroup;
   rows        : FormGroup[] = [];

   constructor(protected magic: MagicEngine) {
      this.buildRecords();
      console.log(`task constructor: ${counter++}`);
   }


   buildRecords(){
      this.rows.push(new FormGroup({
         name: new FormControl(''),
         id: new FormControl(''),
      }))
   }

   startMagic() {
      this.magic.startMagic();
   }

    getTaskId(parentId, subformName) : string{
        return this.magic.getTaskId(parentId, subformName);
    }


   insertEvent( eventName:string, controlIdx:string, lineidx:number){
      this.magic.insertEvent(this.taskId, eventName, controlIdx, lineidx);
   }

   registerGetValueCallback( cb) {
      this.magic.registerGetValueCallback(this.taskId, cb);
   }

   registerRefreshUI( cb) {
      this.magic.registerRefreshUI(this.taskId, cb);
   }

   registerRefreshTableUI(cb) {
      this.magic.registerRefreshTableUI(cb);
   }

   registerShowMessageBox(cb) {
      this.magic.registerShowMessageBox(this.taskId, cb);
   }

   getProperty(controlId:string,prop:PropType) {
     return this.controlsMetadata_.getProperty(controlId, prop);
   }
}
