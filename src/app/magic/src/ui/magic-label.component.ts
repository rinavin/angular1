import {Component, Input} from "@angular/core";
import {TaskMagicService} from "../services/task.magics.service";
import {PropType} from "./propType";

@Component({
   selector : 'm-label',
   template:`
      <span [magic]="controlId" [hidden] = !(visible)>{{text}}</span>  
`})
export class MagicLabelComponent{

   @Input() controlId:string;

   constructor(private task : TaskMagicService){

   }

   get text(){
     return this.task.getProperty(this.controlId,PropType.Text );
   }

  get visible() {
    return this.task.getProperty(this.controlId,PropType.Visible) == 1;
  }
}
