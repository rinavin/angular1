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
        rumne
        <img magic="logo"/>
       
        <div class="dropdown">
          <m-label controlId="welcome"></m-label>
          <span magic="welcome"></span>
          <i class="fa fa-caret-down"></i>
          <div class="buttons">
            <button>Profile</button>
            <button>Change Password</button>
            <button magic="logoff">Log off</button>
          </div>
        </div>
      </nav>
      <div>
        <!--<ndc-dynamic [ndcDynamicComponent]="MainCanvas"-->
                     <!--[ndcDynamicInputs]="parameters">-->
        <!--</ndc-dynamic>-->
        <ndc-dynamic magic="MainCanvas"[ndcDynamicComponent]="getComp('MainCanvas')"
                     [ndcDynamicInputs]="getParameters('MainCanvas')">
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
    // this.task.registerOpenSubformCallback((subformControlName: string, formName: string, taskId: string, taskDescription: string) => {
    //   console.log('registerOpenSubformCallback', subformControlName, taskId);
    //   if (subformControlName === 'MainCanvas') {
    //     this.MainCanvas = ComponentsList.compHash[formName];
    //     this.parameters = {myTaskId: taskId, taskDescription: taskDescription};
    //     this.ref.detectChanges();
    //   }
    // });
  }


}
