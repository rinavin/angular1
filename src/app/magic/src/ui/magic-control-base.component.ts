import {Component, Input} from "@angular/core";
import {TaskMagicService} from "../services/task.magics.service";
import {PropType} from "./propType";
import {HtmlProperties} from "../controls.metadata.model";

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
    return this.task.getProperty(this.controlId,HtmlProperties.Text, this.rowId );
  }

  get visible() {
    return this.task.getProperty(this.controlId,HtmlProperties.Visible, this.rowId) == 1;
  }

  get enable() {
    return this.task.getProperty(this.controlId,HtmlProperties.Enabled, this.rowId) == 1;
  }

  get getFormat()
  {
    return  this.task.getProperty(this.controlId, HtmlProperties.Text, this.rowId);
  }

  GetValue(){
    return this.task.getValue(this.controlId);
  }
}
