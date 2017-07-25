import {Component, OnInit, ChangeDetectorRef, Input, Injectable} from '@angular/core';

import {TaskMagicService} from "../services/task.magics.service";
import {PropType} from "./propType";
import {MagicControlBase} from "./magic-control-base.component";

@Component({
  selector : 'm-imageButton',
  template:`
    <button [ngStyle]="GetStyle(this.controlId)">
        {{ getFormat }}
      </button>     
   `,
})

export class MagicImageButtonComponent extends MagicControlBase{

  @Input() controlId:string;

  formatRet: string;

  constructor(protected task  : TaskMagicService){
    super(task)
  }

  GetStyle(){
    let style =  {
      'background-image'  : `url(${this.GetValue()})`,
      'background-repeat' : 'round',
      'background-size'   : 'cover'
  };
    return  style;
}

  get ImageFileName(){
    return this.task.getValue(this.controlId);
  }
}
