import {Component} from "@angular/core";
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {FormGroup} from "@angular/forms";
import {TaskMagicService} from "../magic/src/services/task.magics.service";
import {ComponentsList} from "../components";


@Component({
  selector: 'main-online-screen',
  providers: [TaskMagicService],
  template:`
    <div>
      <form novalidate [formGroup]="user">
        <m-image controlId="restaurant_name_banner"></m-image>
        <br>
        <input
          type="text"
          magic="pi_Store_Description_0001"
          formControlName="pi_Store_Description_0001"
          readonly
          style="border: 0px">
        <br>
        <m-label controlId="menu"></m-label>
        <br>
        <ul>
          <li *ngFor="let o of task.Records.list">
            <m-hyperTextButton controlId="hyperButton1" [rowId]="o.rowId"></m-hyperTextButton>
            <span magic="headerItemDescription" [rowId]="o.rowId" [hidden]="true">{{o.values['headerItemDescription']}}</span>
            <span magic="ItemDescription" [rowId]="o.rowId">{{o.values['ItemDescription']}}</span>
            <m-label controlId="plus" [rowId]="o.rowId"></m-label>
            <m-image controlId="bagImageButton1" [rowId]="o.rowId"></m-image>
            <span magic="Price wo/ Tax" [rowId]="o.rowId">{{o.values['Price wo/ Tax']}}</span>
          </li>
        </ul>
      <hr>
        <m-image controlId="buttonUp"></m-image>
        <br>
        <m-image controlId="buttonDown"></m-image>
      </form>
      <ndc-dynamic [ndcDynamicComponent]="SubTree"
                    [ndcDynamicInputs]="parameters">
      </ndc-dynamic>
      <br>
      <br>
    </div>
  `
})

export class MainOnlineScreenComponent extends BaseTaskMagicComponent {

  SubTree: Component;
  parameters: any;

  get user(): FormGroup {
    return this.record;
  }

  ngOnInit(){
    super.ngOnInit();
    this.task.registerOpenSubformCallback((subformControlName: string, formName: string, taskId: string, taskDescription:string) => {
      console.log('registerOpenSubformCallback', subformControlName, taskId);
      if (subformControlName === 'SubTree') {
        this.SubTree = ComponentsList.compHash[formName];
        this.parameters = {myTaskId: taskId, taskDescription: taskDescription};
        this.ref.detectChanges();
      }
    });
  }
}
