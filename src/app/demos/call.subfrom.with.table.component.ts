import {Component} from "@angular/core";
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {FormGroup} from "@angular/forms";
import {TaskMagicService} from "../magic/src/services/task.magics.service";


@Component({
   selector: 'callSubfomwithTable',
   providers: [TaskMagicService],
  //language=Angular2HTML
  template: `
      <h3>Call Table Test {{taskId}}</h3>
      <form novalidate [formGroup]="user">
         <label>
            <span>Id:</span>
            <input
               type="text"
               magic="id"
               formControlName="id"
            >
         </label>
         <br>
         <label>
            <span>Name:</span>
            <input
               type="text"
               magic="name"
               [rowId]="1"
               formControlName="name"
            >
         </label>
         <button magic="nextb" >Next</button>
         <button magic="prevb" >Prev</button>
      </form>
      
      <div style="border: 3px solid black;margin: 15px">
         <tabletest 
            [subformName]=subform1Name 
            [parentId]=taskId></tabletest>
      </div>
   `
})
export class  CallSubformwithTableComponent extends BaseTaskMagicComponent{
   subform1Name: string = "mysubform1";
   get user(): FormGroup{
      return this.record;
   }

}

