import {Component, Input} from "@angular/core";
import {TaskMagicService} from "../services/task.magics.service";
import {PropType} from "./propType";

@Component({
   selector : 'm-checkbox',
   template:`
     
     
     <label >
       <input [magic]="controlId" type="checkbox"/>
       {{text}}
      </label>  
`})
export class MagicCheckboxComponent{

   @Input() controlId:string;

   constructor(private task : TaskMagicService){

   }

   get text(){
     return this.task.getProperty(this.controlId,PropType.Text );
   }
}
