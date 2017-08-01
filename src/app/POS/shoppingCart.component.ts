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
      <form novalidate [formGroup]="user">
        <m-label controlId="YourOrder"></m-label>
        <m-image controlId="Photograph"></m-image>
        <br>
        <m-label controlId="Delivery_ToGo"></m-label>
        <br>
        <m-label controlId="Subtotal"></m-label>
        <br>
        <input
          type="text"
          magic="vSubTotal"
          formControlName="vSubTotal"
          readonly
          style="border: 0px"><br>
        <m-image controlId="orangeButton"></m-image>
        <div *ngIf="task.Records.list.length > 0">
          <li *ngFor="let o of task.Records.list" >
            <span magic="Item_Description" [rowId]="o.rowId">{{o.values['Item_Description']}}</span>
            <span magic="itemPrice" [rowId]="o.rowId" [attr.hidden]="!(visible('itemPrice',o.rowId)) ? true : null">{{o.values['itemPrice']}}</span>
            <button magic="plus" [rowId]="o.rowId" [attr.hidden]="!(visible('plus',o.rowId)) ? true : null">+</button>
            <button magic="minus" [rowId]="o.rowId" [attr.hidden]="!(visible('minus',o.rowId)) ? true : null">-</button>
          </li>
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
    return this.task.getProperty(controlId,PropType.Visible, rowId) == 1;
  }
}
