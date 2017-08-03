/**
 * Created by rinav on 05/07/2017.
 */
import {Injectable} from "@angular/core";

// export interface MagicCallBack{
//    ():void;
// }


@Injectable()
export class MagicEngine{
   magic = window['magic1'];


   startMagic() {
      // alert('function 4 called');
      this.magic.start();
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

  registerSetFocusCallback(taskId, cb) {
    this.magic.registerSetFocusCallback(taskId, cb);
  }

  registerCloseFormCallback(taskId, cb) {
    this.magic.registerCloseFormCallback(taskId, cb);
  }
}
