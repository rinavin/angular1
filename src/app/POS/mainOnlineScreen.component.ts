import {Component} from "@angular/core";
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {FormGroup} from "@angular/forms";
import {TaskMagicService} from "../magic/src/services/task.magics.service";
import {ComponentsList} from "../components";


@Component({
  selector: 'main-online-screen',
  providers: [TaskMagicService],
  template: `
    <link rel="stylesheet" href="https://unpkg.com/neo-assets@1/dist/css/neo.min.css">
    <link rel="stylesheet" href="https://unpkg.com/neo-assets@1.3.0/dist/css/neo-checkbox-radio.min.css">
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/css/bootstrap-datepicker3.css"/>
    <div class="mainbody">
      <div class="pull-left  pad0">
        <!--<div style="width: 100%; display: table;">-->
          <!--<div style="display: table-row">-->
            <!--<div style="width: 600px; display: table-cell;">-->
              <form novalidate [formGroup]="screenFormGroup">
                <br>
                <img [src]="getImage('restaurant_name_banner')" magic="restaurant_name_banner" class="posbannerimg">
                <!--<m-image controlId="restaurant_name_banner" class="posbannerimg"></m-image>-->
                <h2><input
                  type="text"
                  magic="pi_Store_Description_0001"
                  formControlName="pi_Store_Description_0001"
                  readonly
                  style="border: 0px"></h2>
                <br>
                <ul style="list-style: none;padding: 0">
                  <li *ngFor="let o of task.Records.list">
                    <div class="row" class="col-xs-4 col-sm-6">
                        <div class="bbord tbpad10">
                          <label><span magic="descriptionTitle"
                                       [rowId]="o.rowId">{{o.values['descriptionTitle']}}</span></label>
                          <br>
                          <p><span magic="headerItemDescription" [rowId]="o.rowId"
                                   [hidden]="true">{{o.values['headerItemDescription']}}</span></p>
                          <span magic="ItemDescription" [rowId]="o.rowId">{{o.values['ItemDescription']}}</span>
                          <br>
                          <button magic="buttonAdd" [rowId]="o.rowId" class="btn btn-primary rmar10">Add</button>
                          <img [src]="getImage('bagImageButton1', o.rowId)" magic="bagImageButton1" rowId="o.rowId">
                          <!--<m-image controlId="bagImageButton1" [rowId]="o.rowId"></m-image>-->
                          <span magic="Price wo/ Tax" class="neo-white neo-orange-bg lrpad5"
                                [rowId]="o.rowId">{{o.values['Price wo/ Tax']}}</span>
                        </div>
                      </div>
                  </li>
                </ul>

              </form>
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      </div>
      <!--<div class="pull-right col-xs-12 col-sm-12 col-md-4 rpad0" style="display: table-cell;">-->
      <ndc-dynamic [ndcDynamicComponent]="SubTree"
                   [ndcDynamicInputs]="parameters">
      </ndc-dynamic>
      <br>
      <br>
      <!--</div>-->
    </div>

  `
})

export class MainOnlineScreenComponent extends BaseTaskMagicComponent {

  SubTree: Component;
  parameters: any;



  ngOnInit() {
    super.ngOnInit();
    this.task.registerOpenSubformCallback((subformControlName: string, formName: string, taskId: string, taskDescription: string) => {
      console.log('registerOpenSubformCallback', subformControlName, taskId);
      if (subformControlName === 'SubTree') {
        this.SubTree = ComponentsList.compHash[formName];
        this.parameters = {myTaskId: taskId, taskDescription: taskDescription};
        this.ref.detectChanges();
      }
    });
  }
}
