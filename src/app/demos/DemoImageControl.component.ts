import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { FormGroup } from "@angular/forms";
import {TaskMagicService} from "../magic/src/services/task.magics.service";
//import { PropType } from "../magic/src/ui/propType";


@Component({
   selector: 'SeeImageControl',
   providers: [TaskMagicService],
   template: `
      <form novalidate [formGroup]="user">
         <label>
            <m-label controlId="idlabel"></m-label>
           <input            
             type="text"
             magic="id"
             formControlName="id">
         </label>
         <br>  
         <label>
            <span>Name:</span>
            <input
               type="text"
               magic="name"
               formControlName="name"
               >
         </label>
         <m-image controlId="MyImage"></m-image>
         <button magic="nextb" >Next</button>
         <button magic="prevb" >Prev</button>
      </form>
   `
})
export class DemoImageControlComponent extends BaseTaskMagicComponent {

      get user(): FormGroup {
            return this.record;
      }






}



