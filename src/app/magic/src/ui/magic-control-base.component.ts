import {Component, Input} from "@angular/core";
import {TaskMagicService} from "../services/task.magics.service";
import {PropType} from "./propType";

@Component({
  selector: 'control-base',
  providers: [TaskMagicService]
})

export class MagicControlBase{

  @Input() controlId: string;
  @Input() protected rowId?:string;

  constructor(protected task: TaskMagicService){
  }

  get text(){
    return this.task.getProperty(this.controlId,PropType.Text, this.rowId );
  }

  get visible() {
    return this.task.getProperty(this.controlId,PropType.Visible, this.rowId) == 1;
  }

  get getFormat()
  {
    return  this.task.getProperty(this.controlId, PropType.Format, this.rowId);
  }

  GetValue(){
    return this.task.getValue(this.controlId);
  }
}
