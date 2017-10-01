/**
 * Created by yulis on 7/25/2017.
 */
import {Component} from "@angular/core";
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {FormGroup} from "@angular/forms";
import {ComponentsList} from "../components";
import {TaskMagicService} from "../magic/src/services/task.magics.service";
import {PropType} from "../magic/src/ui/propType";

@Component({
  selector: 'shopping-cart',
  providers: [TaskMagicService],
  template: `
    <div>
      <link rel="stylesheet" href="https://unpkg.com/neo-assets@1/dist/css/neo.min.css">
      <link rel="stylesheet" href="https://unpkg.com/neo-assets@1.3.0/dist/css/neo-checkbox-radio.min.css">
      <script src="https://unpkg.com/neo-assets@1/dist/js/neo.min.js"></script>
      <form novalidate [formGroup]="user">
         <br> <br>
        <div class="pull-right col-xs-12 col-sm-12 col-md-4 rpad0">


          <div class="vspacer35 visible-xs visible-sm"></div>
          <!--<div class="pull-right col-xs-12 col-sm-12 col-md-4 rpad0">-->
          <div class="row">
            <div class="col-xs-8 col-sm-8 pad0">

              <h3 class="tmar0">
                <m-label controlId="YourOrder"></m-label>
              </h3>
              <div><b>
                <m-label controlId="Delivery_ToGo"></m-label>
              </b></div>
              <div><b>Facility Type:</b> HC</div>
              <div class="pull-left tmar10"><b>
                <m-label controlId="Subtotal"></m-label>
              </b>
                <input
                  type="text"
                  magic="vSubTotal"
                  formControlName="vSubTotal"
                  readonly
                  style="border: 0px">
              </div>

            </div>
            <div class="col-sm-4 col-xs-4 text-right pad0 userthumb-wrapper">
              <m-image controlId="Photograph"></m-image>
            </div>

          </div>

          <!--<div class="collapse" id="orders">-->
          <br>
            <div class="vspacer15 bbord"></div>
          <div class="row lesspad tmar5">
          <div *ngIf="task.Records.list.length > 0">
            <ul style="list-style: none;padding: 0">
            <li *ngFor="let o of task.Records.list">

              <!--<div class="row lesspad tmar5">-->
                <div class="col-sm-7 col-xs-7 pad0">
                  <span magic="Item_Description" [rowId]="o.rowId">{{o.values['Item_Description']}}</span>
                </div>
                <div class="col-sm-5 col-xs-5 pad0">
                  <div class="row lesspad">
                    <div class="col-sm-7 col-xs-7 text-right">
                      <span class="fa fa-plus-circle neo-primary curhand" magic="plus" [rowId]="o.rowId"
                            [style.visibility]="!(visible('plus',o.rowId)) ? true : null"></span>
                    </div>
                    <div class="col-sm-3 col-xs-3 text-right">
                      <span magic="itemPrice" [rowId]="o.rowId"
                            [attr.hidden]="!(visible('itemPrice',o.rowId)) ? true : null">{{o.values['itemPrice']}}</span>

                    </div>
                    <div class="col-sm-2 col-xs-2 text-right pad0">
                      <span class="fa fa-minus-circle neo-primary curhand" magic="minus" [rowId]="o.rowId" 
                            [attr.hidden]="!(visible('minus',o.rowId)) ? true : null">
                        
                      </span>
                        
                      
                    </div>
                  </div>
                </div>
              <!--</div>-->
              <!--</div>-->
              
              
              <!--<span class="fa fa-plus-circle neo-primary curhand"></span>-->

              <!--<span magic="Item_Description" [rowId]="o.rowId">{{o.values['Item_Description']}}</span>-->
              <!--<span magic="itemPrice" [rowId]="o.rowId"-->
                    <!--[attr.hidden]="!(visible('itemPrice',o.rowId)) ? true : null">{{o.values['itemPrice']}}</span>-->
              <!--<button class="fa fa-plus-circle neo-primary curhand" magic="plus" [rowId]="o.rowId"-->
                      <!--[attr.hidden]="!(visible('plus',o.rowId)) ? true : null">+-->
              <!--</button>-->
              <!--<button magic="minus" [rowId]="o.rowId" [attr.hidden]="!(visible('minus',o.rowId)) ? true : null">- -->
              <!--</button>-->
            </li>
            </ul>
          </div>
        </div>
        </div>
      </form>
    </div>
  `
})

export class ShoppingCartComponent extends BaseTaskMagicComponent {

  get user(): FormGroup {
    return this.record;
  }

  visible(controlId: string, rowId?: string) {
    return this.getvisible(controlId, rowId);
  }
}
