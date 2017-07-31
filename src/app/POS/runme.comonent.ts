import {TaskMagicService} from "../magic/src/services/task.magics.service";
import {Component} from "@angular/core";
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {FormGroup} from "@angular/forms";
import {ComponentsList} from "../components";
/**
 * Created by rinav on 7/19/2017.
 */
@Component({
  selector: 'runme',
  providers: [TaskMagicService],
  template: `
    <form novalidate [formGroup]="user">
      <nav>
        <m-image controlId="logo"></m-image>
        <m-label controlId="welcome"></m-label>
        <button magic="logoff">log off</button>
      </nav>
      <div>
        <ndc-dynamic [ndcDynamicComponent]="MainCanvas"
                     [ndcDynamicInputs]="parameters">
        </ndc-dynamic>
      </div>

    </form>
  `
})
export class RunmeComponent extends BaseTaskMagicComponent {
  MainCanvas: Component;
  parameters: any;


  get user(): FormGroup {
    return this.record;
  }

  ngOnInit() {
    super.ngOnInit();
    this.task.registerOpenSubformCallback((subformControlName: string, formName: string, taskId: string, taskDescription: string) => {
      console.log('registerOpenSubformCallback', subformControlName, taskId);
      if (subformControlName === 'MainCanvas') {
        this.MainCanvas = ComponentsList.compHash[formName];
        this.parameters = {myTaskId: taskId, taskDescription: taskDescription};
        this.ref.detectChanges();
      }
    });
  }


}
