import {Component, OnInit} from "@angular/core";
import {BaseTaskMagicComponent} from "../magic/src/ui/app.baseMagicComponent";
import {FormGroup} from "@angular/forms";
import {TaskMagicService} from "../magic/src/services/task.magics.service";
import {Called1Component} from "./called1.component";
import {Called2Component} from "./called2.component";
import {ComponentsList} from "../components";
// import {DynamicModule} from "ng-dynamic-component"

@Component({
   selector: 'Demo2WithNgDynamicComponent',
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
               rowId="0"
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
        <ndc-dynamic [ndcDynamicComponent]="getComp('mysubform1')"
                     [ndcDynamicInputs]="getParameters('mysubform1')">
        </ndc-dynamic>
      </div>
   `
})
export class  Demo2WithNgDynamicComponent extends BaseTaskMagicComponent implements OnInit{
  // subform1Name: string = "mysubform1";
  subformsDict: { [x: string]: SubformDefinition } = {};


  emptycomp: Component;


  get user(): FormGroup{
    return this.record;
  }

  ngOnInit(){
    super.ngOnInit();
    this.task.registerOpenSubformCallback((subformControlName: string, formName: string, taskId: string, taskDescription:string) => {
      console.log('registerOpenSubformCallback', subformControlName, taskId);
      this.subformsDict[subformControlName] = {formName,
        parameters:{myTaskId: taskId, taskDescription: taskDescription}};

      alert('good!');
      this.ref.detectChanges();
      //}
    });
  }
  getComp(subformName: string ): Component
  {
    if (subformName in this.subformsDict) {
      let formName: string = this.subformsDict[subformName].formName;
      return ComponentsList.compHash[formName];
    }
    else
      return this.emptycomp;

  }

  getParameters(subformName: string ): any
  {
    if (subformName in this.subformsDict) {
      return this.subformsDict[subformName].parameters;
    }
    else
      return "";

  }
}

interface SubformDefinition {
  formName:string;
  parameters:any;
}

