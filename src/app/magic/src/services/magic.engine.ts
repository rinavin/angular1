/**
 * Created by rinav on 05/07/2017.
 */
import {Injectable} from "@angular/core";
import {TaskMagicService} from "./task.magics.service";
import {Subject} from "rxjs/Subject";
import {GuiCommand} from "./GuiCommand";

// export interface MagicCallBack{
//    ():void;
// }


@Injectable()
export class MagicEngine{
   magic = window['magic1'];
   //TODO - unregister
   refreshDom:Subject<GuiCommand> = new Subject();

   startMagic() {
      // alert('function 4 called');
      this.magic.start(data => {
        let list: GuiCommand[];
        let obj = JSON.parse(data);
        list = obj as GuiCommand[];
        //list = data.json() as GuiCommand[];
        for (let command in list) {
          this.refreshDom.next(list[command]);
        }
      });
   }

   refreshUI(data) {

     data => {
       let list: GuiCommand[];
       let obj = JSON.parse(data);
       list = obj as GuiCommand[];
       //list = data.json() as GuiCommand[];
       for (let command in list) {
         this.refreshDom.next(list[command]);
       }
     }
   }

   getTaskId(parentId, subformName):string
   {
       return  this.magic.getTaskId(parentId, subformName);
   }

   insertEvent(taskId, eventName, controlIdx, lineidx) {
      console.log(eventName,controlIdx, lineidx);
      this.magic.insertEvent(taskId, eventName, controlIdx, lineidx);

   }

   registerGetValueCallback(taskId, cb) {
      this.magic.registerGetValueCallback(taskId, cb);
   }

   registerRefreshUI(taskId, cb) {
      this.magic.registerRefreshUI(taskId, cb);
   }

   registerRefreshTableUI(taskId, cb) {
      this.magic.registerRefreshTableUI(taskId, cb);
   }

   registerShowMessageBox(cb) {
      this.magic.registerShowMessageBox( cb);
   }

   registerOpenFormCallback(cb) {
      this.magic.registerOpenFormCallback(cb);
   }

  registerOpenSubformCallback(taskId, cb) {
    this.magic.registerOpenSubformCallback(taskId, cb);
  }



}
