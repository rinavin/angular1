import { Component  } from '@angular/core';
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {FormGroup} from "@angular/forms";
import {TaskMagicService} from "../magic/src/services/task.magics.service";

@Component({
  selector: 'app-called1',
  providers: [TaskMagicService],
  template: `
    <h3>Called1 - TaskId: {{taskId}}</h3>
    <form novalidate [formGroup]="user">
      <label>
        <!--<span magic="idlabel" [ngStyle]="getStyle('idlabel')">{{gettext('idlabel')}}</span>-->
        <span magic="idlabel" [style.visibility]="getvisible('idlabel') ? 'visible' : 'hidden'">{{gettext('idlabel')}}</span>

        <input  [attr.disabled]="isDisabled('id')"
          type="text"
          magic="id"
          formControlName="id"
          
        >
      </label>
      <br>
      <label>
        <span>Called1 Name111:</span>
        <input
          type="text"
          magic="name"
          formControlName="name"
        >
      </label>
      <button magic="nextb" >Next</button>
      <button magic="prevb" >Prev</button>
    </form>
  `
})
export class Called1Component extends BaseTaskMagicComponent {

  get user(): FormGroup{
    return this.record;
  }
}
