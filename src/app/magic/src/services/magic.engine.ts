/**
 * Created by rinav on 05/07/2017.
 */
import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {GuiCommand} from "../ui/gui.command";

@Injectable()
export class MagicEngine {
  magic = window['magic1'];
  //TODO - unregister
  refreshDom: Subject<GuiCommand> = new Subject();

  startMagic() {
    this.magic.start(data => {
      let list: GuiCommand[];
      let obj = JSON.parse(data);
      list = obj as GuiCommand[];
      for (let command in list) {
        this.refreshDom.next(list[command]);
      }
    });
  }

  getTaskId(parentId, subformName): string {
    return this.magic.getTaskId(parentId, subformName);
  }

  insertEvent(taskId, eventName, controlIdx, lineidx) {
    this.magic.insertEvent(taskId, eventName, controlIdx, lineidx);

  }

  registerGetValueCallback(taskId, cb) {
    this.magic.registerGetValueCallback(taskId, cb);
  }

  registerShowMessageBox(cb) {
    this.magic.registerShowMessageBox(cb);
  }

  registerOpenFormCallback(cb) {
    this.magic.registerOpenFormCallback(cb);
  }
}
