import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { FormGroup } from "@angular/forms";
import {TaskMagicService} from "../magic/src/services/task.magics.service";
//import { PropType } from "../magic/src/ui/propType";


@Component({
   selector: 'demo1',
   providers: [TaskMagicService],
   template: `
      <form novalidate [formGroup]="user">
         <label>
            <!--<span>{{GetProperty('idlabel', propType.Text )}}</span>-->
            <m-label controlId="idlabel"></m-label>
           <input            
             type="text"
             magic="id"
             formControlName="id">
            <!--<input
               class="jasmine-alert"
               [ngClass]="GetClass('idlabel')"
               
               style="border:1px solid red;"
               [ngStyle]="GetStyle('idlabel')"
               
               tooltip="idlabel"
               type="text"
               magic="id"
               formControlName="id"
               >-->
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
         <button magic="nextb" >Next</button>
         <button magic="prevb" >Prev</button>
      </form>
   `
})
export class Demo1Component extends BaseTaskMagicComponent {



      get user(): FormGroup {
            return this.record;
      }

      GetProperty(controlId: string, propertyType: number): string {
           return this.props['idlabel'][propertyType];
      }




}



