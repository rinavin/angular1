import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MagicEngine} from "./magic/src/services/magic.engine";
//import {BaseTaskMagicComponent} from './magic/src/ui/app.baseMagicComponent';
import { ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import {Demo1Component} from "./demos/demo1.component";
import {Demo2Component} from "./demos/demo2.component";
import {Demo2WithNgContainerComponent} from "./demos/demo2WithNgContainer.component";
import {Demo2WithNgDynamicComponent} from "./demos/demo2WithNgDynamic.component";
import {TableTestComponent} from "./demos/table.test.component";
import {ComponentsList} from "./components";
//import {BaseTaskMagicComponent} from "./magic/src/ui/app.baseMagicComponent";

declare var myExtObject: any;
@Component({
   selector: 'app-root',
   template: `

      <!--<demo1></demo1>-->
      <div>
      <ndc-dynamic [ndcDynamicComponent]="RootComp"
                   [ndcDynamicInputs]="parameters">
      </ndc-dynamic>
      </div>

      <div>
      <ndc-dynamic [ndcDynamicComponent]="ModalComp"
                   [ndcDynamicInputs]="modalParameters">
      </ndc-dynamic>
      </div>
   `})
export class AppComponent {//extends BaseTaskMagicComponent implements OnInit {

  RootComp: Component;
  parameters: any;
  ModalComp: Component;
  modalParameters: any;

constructor(protected magic: MagicEngine,
            private componentFactoryResolver: ComponentFactoryResolver,
            private viewContainerRef: ViewContainerRef,
            protected ref: ChangeDetectorRef) {
    this.initializeMagic();
   }

  ngOnInit() {
    this.magic.startMagic();
  }

  private InjectComponent(formName:string, taskId: string, taskDescription: string, isModal: boolean) {
    if (isModal){
      this.ModalComp = ComponentsList.compHash[formName];
      this.modalParameters = {myTaskId: taskId, taskDescription: taskDescription};
    }
    else
    {
      this.RootComp = ComponentsList.compHash[formName];
      this.parameters = {myTaskId: taskId, taskDescription: taskDescription};
    }
    this.ref.detectChanges();

    //const factory = this.componentFactoryResolver.resolveComponentFactory(ComponentsList.compHash[formName]);
    //const ref = this.viewContainerRef.createComponent(factory);
    //ref.instance.myTaskId = taskId;
    //var baseComp = <BaseTaskMagicComponent>ref;
    // baseComp.myTaskId = taskId;
    // baseComp.taskDescription = taskDescription;

    //ref.changeDetectorRef.detectChanges();

  }
   initializeMagic() {

     var self = this;

     this.magic.registerOpenFormCallback((formName: string, taskId: string, taskDescription: string, isModal: boolean) => {
       this.InjectComponent(formName, taskId, taskDescription, isModal);
     });

     this.magic.registerShowMessageBox(msg => {
       alert(msg);
     });
   }
}

// export interface User {
//    id: string;
//    name: string;
//
// }
