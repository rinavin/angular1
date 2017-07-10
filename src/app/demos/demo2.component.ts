import {Component} from "@angular/core";
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {FormGroup} from "@angular/forms";
import {TaskMagicService} from "../magic/src/services/task.magics.service";


@Component({
   selector: 'demo2',
   providers: [TaskMagicService],
   template: `
      <h3>Demo 2 - TaskId: {{taskId}}</h3>
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
         <innercomponent 
            [subformName]=subform1Name 
            [parentId]=taskId></innercomponent>
      </div>
   `
})
export class  Demo2Component extends BaseTaskMagicComponent{
   subform1Name: string = "mysubform1";
   get user(): FormGroup{
      return this.record;
   }

}

