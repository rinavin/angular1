import {Component, Input} from '@angular/core';

import {TaskMagicService} from "../services/task.magics.service";
import {MagicControlBase} from "./magic-control-base.component";

@Component({
  selector: 'm-imageButton',
  template: `
    <button [ngStyle]="GetStyle(this.controlId)">
      {{ getFormat }}
    </button>
  `,
})

export class MagicImageButtonComponent extends MagicControlBase {

  constructor(protected task: TaskMagicService) {
    super(task)
  }

  GetStyle() {
    let style = {
      'background-image': `url(${this.GetValue()})`,
      'background-repeat': 'round',
      'background-size': 'cover'
    };
    return style;
  }
}
