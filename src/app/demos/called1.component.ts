import { Component  } from '@angular/core';
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {FormGroup} from "@angular/forms";
import {TaskMagicService} from "../magic/src/services/task.magics.service";
import {HtmlProperties} from "../magic/src/controls.metadata.model";

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
<br>
      <br>
      {{getListboxValues("c")}}
      <br>
      <!--<select [(ngModel)]="passenger.Title">-->
        <!--<option *ngFor="#title of titleArray" [value]="title.Value">-->
          <!--{{title.Text}}-->
        <!--</option>-->
      <!--</select>-->
      <div magic="c">
      <select     multiple>
      
        <option *ngFor="let o of getListboxValues('c')">{{o}}</option>
        <!--<option value="volvo">Volvo</option>-->
        <!--<option value="saab">Saab</option>-->
        <!--<option value="opel">Opel</option>-->
        <!--<option value="audi">Audi</option>-->
      </select>
      </div>
    </form>
  `
})
export class Called1Component extends BaseTaskMagicComponent {

  get user(): FormGroup {
    return this.record;
  }

  getListboxValues(id) {
    return this.getProperty(id, HtmlProperties.ITEMS_LIST);
  }
}
