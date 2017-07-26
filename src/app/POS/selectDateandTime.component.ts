/**
 * Created by rinav on 7/24/2017.
 */
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
  selector: 'selectDateTime',
  providers: [TaskMagicService],
  template: `
    <form novalidate [formGroup]="user">
      SelectDateAndTime
      <!--<m-image controlId="selectlocation"></m-image>-->


    </form>
  `
})
export class SelectDateAndTime extends BaseTaskMagicComponent {


  get user(): FormGroup {
    return this.record;
  }
}

