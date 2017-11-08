import {Component} from '@angular/core';
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {TaskMagicService} from "../magic/src/services/task.magics.service";

@Component({
  selector: 'app-called2',
  providers: [TaskMagicService],
  template: `
    <h3>Called2 - TaskId: {{taskId}}</h3>
    <form novalidate [formGroup]="screenFormGroup">
      <label>
        <span>Called2 Id111:</span>
        <input
          type="text"
          magic="id"
          formControlName="id"
        >
      </label>
      <br>
      <label>
        <span>Called2 Name111:</span>
        <input
          type="text"
          magic="name"
          formControlName="name"
        >
      </label>
      <button magic="nextb">Next</button>
      <button magic="prevb">Prev</button>
    </form>
  `
})
export class SampleComponent extends BaseTaskMagicComponent {
}
