/**
 * Created by rinav on 10/09/2017.
 */
import {Component, Input, ViewContainerRef} from "@angular/core";
import {TaskMagicService} from "../services/task.magics.service";
import {BaseTaskMagicComponent} from "./app.baseMagicComponent";

@Component({
  selector: 'm-subform',
  providers: [TaskMagicService],
  template:    `
    <ndc-dynamic [magic]='mysubform1' [ndcDynamicComponent]="Component" [ndcDynamicInputs]="Parameters">
  </ndc-dynamic>
`
})

export class Subform {

  @Input() controlId: string;
  // subformComp: Component ;
  // parameters : any;
  component: BaseTaskMagicComponent;

  constructor(private vcRef: ViewContainerRef) {
    this.component = (<any>this.vcRef)._view.component as BaseTaskMagicComponent;
  }

  get Component() : Component
  {
    return this.component.getComp(this.controlId);
  }

  get Parameters() : any
  {
    return this.component.getParameters(this.controlId);
  }
}

