import {Component, Input} from "@angular/core";
import {TaskMagicService} from "../services/task.magics.service";
import {PropType} from "./propType";

@Component({
  selector: 'control-base',
  providers: [TaskMagicService]
})

export class MagicControlBase{

  @Input() controlId: string;

  constructor(protected task: TaskMagicService){
  }

  get text(){
    return this.task.getProperty(this.controlId,PropType.Text );
  }

  get visible() {
    return this.task.getProperty(this.controlId,PropType.Visible) == 1;
  }
}
