import {TaskMagicService} from "../magic/src/services/task.magics.service";
import {Component} from "@angular/core";
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {FormGroup} from "@angular/forms";
/**
 * Created by rinav on 7/19/2017.
 */
@Component({
  selector: 'runme',
  providers: [TaskMagicService],
  template: `
    <form novalidate [formGroup]="user">
     
      <m-image controlId="logo"></m-image>
      <m-label controlId="welcome"></m-label>
      <button magic="logoff">log off</button>
      
    </form>
  `
})
export class RunmeComponent extends BaseTaskMagicComponent {



  get user(): FormGroup {
    return this.record;
  }






}
