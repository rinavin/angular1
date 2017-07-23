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
      
      <m-label controlId="selectlocation"></m-label>
      <ul >
        <li *ngFor="let o of task.Records.list" >
          <div style="width: 100%; display: table;">
            <div style="display: table-row">
              <div style="width: 600px; display: table-cell;"> Left 
              <span>
                 <a href="" magic="Index1">{{o.values['Index1']}}</a>
                <br>
                <span>
                  Delivery Hours
                </span>
      
         <!--<span  magic="id" [rowId]="o.rowId">{{o.values['id']}}</span>-->
   
               </span>
            </div>
            <div style="display: table-cell;">
              <span>
                 <a href="" magic="Index1">{{o.values['Index2']}}</a>
                <br>
                <span>
                  Delivery Hours
                </span>
               
   
               </span>
            </div>
            </div>
          </div>
         
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
