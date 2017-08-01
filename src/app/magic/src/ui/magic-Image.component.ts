import {Component, Input} from "@angular/core";
import {TaskMagicService} from "../services/task.magics.service";
import {MagicControlBase} from "./magic-control-base.component";

@Component({
  selector : 'm-image',
  template:`
    <img [src]="ImageFileName" [magic]="controlId"/>
  `})

export class MagicImageComponent extends MagicControlBase{

  constructor(protected task : TaskMagicService){
    super(task)
  }

  get ImageFileName(){
    return this.task.getValue(this.controlId, this.rowId);
  }
}
