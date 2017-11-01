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
    <form novalidate [formGroup]="screenFormGroup">
      <label>
        <!--<span magic="idlabel" [ngStyle]="getStyle('idlabel')">{{gettext('idlabel')}}</span>-->
        <span magic="idlabel"
              [ngClass] = "getClasses('idlabel')"
              [style.visibility]="getvisible('idlabel') ? 'visible' : 'hidden'"
        >{{gettext('idlabel')}}</span>

        <input  [attr.disabled]="isDisabled('id')"
          type="text"
          magic="id"
          [title]="gettitle('id')"
          [ngClass] = "getClasses('id')"
          [tabindex]="gettabindex('id')"
        >
      </label>
      <!--<span class="mgborder1 mgcolor1 alignmentright"-->
        <!--magicId           ="idlabel"-->
        <!--[ngStyle]         = "getStyle()" -->
        <!--[ngClass]         = "getClass()"-->
        <!--[dom-properties]  = ""-->
        <!--&gt;</span>-->
      <br>
      <label class="mgcolor3 ">
        <span>Called1 Name111:</span>
        <input
          [type]="gettype('name')"
          magic="name"
          formControlName="name"
          [placeholder]="getplaceholder('name')"
          [ngClass] = "getClasses('name')"
          [tabindex]="gettabindex('name')"
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
      <div >
      <select  multiple magic="c" (change)="onselectionchanged($event,'c')" >
        <option *ngFor="let o of getListboxValues('c'); let i = index"  [selected]="i == getselectedvalue('c')">
          {{o}}
        </option>
      </select>
      </div>
      <button magic="gotoBtn" >goto</button>
      
      <input magic="chkbx" type="checkbox" (change)="oncheckchanged($event,'chkbx')">
      <span magic="result">{{gettext('result')}}</span>
      
    </form>
  `
})
export class Called1Component extends BaseTaskMagicComponent {

  get user(): FormGroup {
    return this.record;
  }

  getListboxValues(id) {
    return this.getProperty(id, HtmlProperties.ItemsList);
  }
}
