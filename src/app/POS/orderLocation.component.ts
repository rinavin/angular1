/**
 * Created by rinav on 7/23/2017.
 */
import {Component} from "@angular/core";
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {FormGroup} from "@angular/forms";
import {TaskMagicService} from "../magic/src/services/task.magics.service";

/**
 * Created by rinav on 7/19/2017.
 */
@Component({
  selector: 'order-location',
  providers: [TaskMagicService],
  styles: [
    'input {\n' +
    '  border: none;\n' +
    '  background: transparent;\n' +
    '  width: 60px;\n' +
    '  \n' +
    '}'
  ],
  template: `
    <link rel="stylesheet" href="https://unpkg.com/neo-assets@1/dist/css/neo.min.css">
    <form novalidate [formGroup]="screenFormGroup">
      <!--<m-label controlId="selectlocation"></m-label>-->
      <ul>
        <li class="col-xs-6 col-sm-4 col-md-3" *ngFor="let o of task.Records.list" >
          
          <div *ngIf="ifRowCreated(o.rowId)">
            
            <form [formGroup]="getFormGroupByRow(o.rowId)">
              <span magic="Index1" [rowId]="o.rowId">{{o.values['Index1']}}</span>
              <p magic="deliverylabel" [rowId]="o.rowId">{{gettext('deliverylabel', o.rowId)}}</p>
              <input
                type="text"
                magic="STORE1OpenTime"
                [rowId]="o.rowId"
                formControlName="STORE1OpenTime">
              -
              <input
                type="text"
                magic="STORE1CloseTime"
                [rowId]="o.rowId"
                formControlName="STORE1CloseTime">
            </form>

          </div>
        </li>
      </ul>

    </form>
  `
})
export class OrderLocation extends BaseTaskMagicComponent {


}
