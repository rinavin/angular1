import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { FormGroup } from "@angular/forms";
import {TaskMagicService} from "../magic/src/services/task.magics.service";


@Component({
  selector: 'enable-visible',
  providers: [TaskMagicService],
  template: `
    <form novalidate [formGroup]="user">
      <label>
        <m-label controlId="idlabel"></m-label>
        <input
          type="text"
          magic="id"
          formControlName="id"
        >
        <m-label controlId="text1"></m-label>
      </label>
      <br>
      <label>
        <span>Name:</span>
        <m-edit controlId="name"></m-edit>


      </label>
      <button magic="nextb" >Next</button>
      <button magic="prevb" >Prev</button>
    </form>
  `
})


export class EnableVisibleTestComponent extends BaseTaskMagicComponent {


  disabled1:boolean = false;

  get user(): FormGroup {
    return this.record;
  }


}



