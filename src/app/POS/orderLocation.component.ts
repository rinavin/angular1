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
  template: `
    <link rel="stylesheet" href="https://unpkg.com/neo-assets@1/dist/css/neo.min.css">
    <form novalidate [formGroup]="screenFormGroup">
      orderlocation
      <!--<m-label controlId="selectlocation"></m-label>-->
      <ul>
        <li class="col-xs-6 col-sm-4 col-md-3" *ngFor="let o of task.Records.list" magic="Index1">
            <div>{{o.values['Index1']}}</div>
            <div>Delivery Hours</div> 
            <span magic="STORE1OpenTime">{{o.values['STORE1OpenTime']}}-</span>
            <span magic="STORE1CloseTime">{{o.values['STORE1CloseTime']}}</span>
        </li>
      </ul>

    </form>
  `
})
export class OrderLocation extends BaseTaskMagicComponent {



}
