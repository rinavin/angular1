import {Component, Input} from "@angular/core";
import {TaskMagicService} from "../services/task.magics.service";
import {PropType} from "./propType";

@Component({
   selector : 'm-label',
   template:`
      <span [magic]="controlId">{{text}}</span>  
`})
export class MagicLabelComponent{

   @Input() controlId:string;

   constructor(private task : TaskMagicService){

   }

   get text(){
     if (this.task.props != null)
        return this.task.props[this.controlId][PropType.Text];
     return "aaa";
   }
}
