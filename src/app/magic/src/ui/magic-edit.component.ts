import {Component, ElementRef, Input, ViewChild} from "@angular/core";
import {TaskMagicService} from "../services/task.magics.service";
import {PropType} from "./propType";

@Component({
  selector:'m-edit',
  template: `
     <input
     type="text"
     magic="name"
     formControlName="name"
     [disabled]="!(enabled) ? true : null">
  `
})

export class MagicEditComponent {

  @Input() controlId: string;


  constructor(private task: TaskMagicService) {

  }

  get enabled() {
    return this.task.getProperty(this.controlId,PropType.Enable) == 1;
  }
}
