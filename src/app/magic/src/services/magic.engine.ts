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
   //magic = window.magic1;

   startMagic() {
      // alert('function 4 called');
      // func = cb;
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

   registerRefreshTableUI(cb) {
      this.magic.registerRefreshTableUI(cb);
   }

   registerShowMessageBox(taskId, cb) {
      this.magic.registerShowMessageBox(taskId, cb);
   }

}
