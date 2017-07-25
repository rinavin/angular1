import {Component, Input} from "@angular/core";
import {TaskMagicService} from "../services/task.magics.service";
import {PropType} from "./propType";

@Component({
  selector : 'm-image',
  template:`
    <img [src]="ImageFileName" [magic]="controlId"/>
  `})

export class MagicImageComponent{

  @Input() controlId:string;

  constructor(private task : TaskMagicService){
  }

  get ImageFileName(){
    return this.task.getValue(this.controlId);
  }
}
