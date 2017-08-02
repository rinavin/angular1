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
    <form novalidate [formGroup]="user">

      <!--<m-label controlId="selectlocation"></m-label>-->
      <ul>
        <li *ngFor="let o of task.Records.list" magic="Index1">
            <div>{{o.values['Index1']}}</div>
            <div>Delivery Hours</div>
            <span magic="STORE1OpenTime">{{o.values['STORE1OpenTime']}}-</span>
            <span magic="STORE2OpenTime">{{o.values['STORE1CloseTime']}}</span>
        </li>
      </ul>

    </form>
  `
})
export class OrderLocation extends BaseTaskMagicComponent {


  get user(): FormGroup {
    return this.record;
  }
}
