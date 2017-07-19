import {Component, OnInit} from "@angular/core";
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {FormGroup} from "@angular/forms";
import {TaskMagicService} from "../magic/src/services/task.magics.service";
import {Called1Component} from "./called1.component";
import {Called2Component} from "./called2.component";
import {ComponentsList} from "../components";

@Component({
   selector: 'Demo2WithNgContainerComponent',
   providers: [TaskMagicService],
   template: `
      <h3>Demo 2 With NgContainer - TaskId: {{taskId}}</h3>
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
        <BR><BR>
        <button magic="btnCalled1" >call called1</button>
        <button magic="btnCalled2" >call called2</button>
      </form>
      
      <div style="border: 3px solid black;margin: 15px">
        <ng-container *ngComponentOutlet="subForms.mysubform1"></ng-container>
      </div>
      
   `
})
export class  Demo2WithNgContainerComponent extends BaseTaskMagicComponent implements OnInit{


  subForms:any = {}

   get user(): FormGroup{
      return this.record;
   }

   ngOnInit(){
     super.ngOnInit();



     this.task.registerOpenSubformCallback((subformControlName: string, formName: string, taskId: string) => {
       console.log('registerOpenSubformCallback', subformControlName, taskId);
       this.subForms[subformControlName] = ComponentsList.compHash[formName];
     });
   }
}

