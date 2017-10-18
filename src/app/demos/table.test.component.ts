/**
 * Created by rinav on 12/07/2017.
 */
import {Component} from "@angular/core";
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {FormGroup} from "@angular/forms";
import {TaskMagicService} from "../magic/src/services/task.magics.service";
import {ControlsMetadata} from "../magic/src/controls.metadata.model";
import {isNullOrUndefined} from "util";

//import { PropType } from "../magic/src/ui/propType";


@Component({
  selector: 'tabletest',
  providers: [TaskMagicService],
  template: `
    <div>
      <h1>TableTest</h1>
      <form novalidate [formGroup]="screenFormGroup">
        <label>
        <span>{{gettext('idlabel')}}</span>
        
        <input
        type="text"
        magic="seeId"
        formControlName="seeId">
        </label>
        <br>

        <ul style="list-style: none;padding: 0">
          <li *ngFor="let o of task.Records.list">
            <!--[formGroupName]="o.rowId"-->
            <div *ngIf="ifRowCreated(o.rowId)">
              
              <form [formGroup]="getFormGroupByRow(o.rowId)">
                <input
                  type="text"
                  magic="id"
                  [rowId]="o.rowId"
                  formControlName="id">
                <!--<span  magic="id" [rowId]="o.rowId">{{o.values['id']}}</span>-->
                <span magic="name" [rowId]="o.rowId">{{gettext('name', o.rowId)}}</span>
                <button magic="clickme" [rowId]="o.rowId"> ClickMe</button>

              </form>
              
            </div>

          </li>
          <button magic="refresh">View Refresh</button>

        </ul>
      </form>
    </div>
  `
})
export class TableTestComponent extends BaseTaskMagicComponent {

}








