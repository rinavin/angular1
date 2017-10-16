import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { FormGroup } from "@angular/forms";
import {TaskMagicService} from "../magic/src/services/task.magics.service";
import {PropType} from "../magic/src/ui/propType";
import {HtmlProperties} from "../magic/src/controls.metadata.model";


@Component({
  selector: 'enable-visible',
  providers: [TaskMagicService],
  template: `
    <form novalidate [formGroup]="screenFormGroup">
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



  enabled(controlId: string) {
    return this.getProperty(controlId,HtmlProperties.Enabled) == 1;
  }



}



