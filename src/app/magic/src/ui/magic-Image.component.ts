import {Component, Input} from "@angular/core";
import {TaskMagicService} from "../services/task.magics.service";
import {PropType} from "./propType";

@Component({
  selector : 'm-image',
  template:`
    <span [magic]="controlId">
    <img [src]="ImageFileName"/>
    </span>
    
  `})

export class MagicImageComponent{

  @Input() controlId:string;

  constructor(private task : TaskMagicService){
  }

  get ImageFileName(){
    return this.task.getValue(this.controlId);
  }
}
