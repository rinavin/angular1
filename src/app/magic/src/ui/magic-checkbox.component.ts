import {Component} from "@angular/core";
import {TaskMagicService} from "../services/task.magics.service";
import {MagicControlBase} from "./magic-control-base.component";

@Component({
  selector: 'm-checkbox',
  template: `
    <label>
      <input [magic]="controlId" type="checkbox"/>
      {{text}}
    </label>
  `
})

export class MagicCheckboxComponent extends MagicControlBase {

  constructor(protected task: TaskMagicService) {
    super(task);

  }
}
