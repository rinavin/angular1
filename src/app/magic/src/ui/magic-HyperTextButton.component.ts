import {Component, OnInit, ChangeDetectorRef, Input, Injectable} from '@angular/core';

import {TaskMagicService} from "../services/task.magics.service";
import {MagicControlBase} from "./magic-control-base.component";

@Component({
  selector : 'm-hyperTextButton',
  template:`    
    <a href="#" [magic]="controlId" [rowId]="rowId">{{ getFormat }}</a>
   `,
})

export class MagicHyperTextButtonComponent extends MagicControlBase{

  constructor(protected task  : TaskMagicService){
    super(task)
  }
}
