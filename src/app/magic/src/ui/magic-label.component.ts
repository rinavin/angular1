import {Component, Input} from "@angular/core";
import {TaskMagicService} from "../services/task.magics.service";
import {PropType} from "./propType";
import {MagicControlBase} from "./magic-control-base.component";

@Component({
   selector : 'm-label',
   template:`
      <span [magic]="controlId" [hidden] = !(visible)>{{text}}</span>  
`})
export class MagicLabelComponent extends MagicControlBase {
}

