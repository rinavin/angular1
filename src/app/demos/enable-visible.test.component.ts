import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { FormGroup } from "@angular/forms";
import {TaskMagicService} from "../magic/src/services/task.magics.service";
import {PropType} from "../magic/src/ui/propType";


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
        <input 
          type="text"
          magic="name"
          formControlName="name"
         [attr.disabled]="!(enabled('name')) ? true : null"
        >
        
      </label>
      <button magic="nextb" >Next</button>
      <button magic="prevb" >Prev</button>
    </form>
  `
})

//[disabled]="!(enabled(controlId)) ? true : null"
//readonly="readonly"
//style = "border:none"


export class EnableVisibleTestComponent extends BaseTaskMagicComponent {


  disabled1:boolean = false;

  get user(): FormGroup {
    return this.record;
  }

  enabled(controlId: string) {
    return this.task.getProperty(controlId,PropType.Enable) == 1;
  }



}



