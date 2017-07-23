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
  selector: 'orderLocation',
  providers: [TaskMagicService],
  template: `
    <form novalidate [formGroup]="user">
       OrderLocation
      <!--<m-image controlId="logo"></m-image>-->
      <m-label controlId="selectlocation"></m-label>
      <!--<button magic="logoff">log off</button>-->
      <ul >
        <li *ngFor="let o of task.Records.list" > 
    <span >
       <a href="" magic="Index1">{{o.values['Index1']}}</a>
      <!--<span  magic="id" [rowId]="o.rowId">{{o.values['id']}}</span>-->
   
    </span>

        </li>
        <button magic="refresh" >View Refresh</button>

      </ul>

    </form>
  `
})
export class OrderLocation extends BaseTaskMagicComponent {


  get user(): FormGroup {
    return this.record;
  }
}
