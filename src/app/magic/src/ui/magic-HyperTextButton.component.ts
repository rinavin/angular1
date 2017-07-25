import {Component, OnInit, ChangeDetectorRef, Input, Injectable} from '@angular/core';

import {TaskMagicService} from "../services/task.magics.service";
import {PropType} from "./propType";
import {MagicControlBase} from "./magic-control-base.component";

@Component({
  selector : 'm-hyperTextButton',
  template:`    
    <a href="#">{{ getFormat }}</a>
   `,
})

export class MagicHyperTextButtonComponent extends MagicControlBase{

  @Input() controlId:string;

  formatRet: string;

  constructor(protected task  : TaskMagicService){
    super(task)
  }
}
