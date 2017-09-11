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
import {BaseTaskMagicComponent} from "./magic/src/ui/app.baseMagicComponent";

declare var myExtObject: any;
@Component({
   selector: 'app-root',
   template: `

      <!--<demo1></demo1>-->
   
   `})
export class AppComponent {//extends BaseTaskMagicComponent implements OnInit {
constructor(protected magic: MagicEngine,
            private componentFactoryResolver: ComponentFactoryResolver,
            private viewContainerRef: ViewContainerRef) {
    this.initializeMagic();
    BaseTaskMagicComponent.componentsListBase = new ComponentsList();
     magic.startMagic();
   }


  private InjectComponent(formName:string) {

    const factory = this.componentFactoryResolver.resolveComponentFactory(ComponentsList.compHash[formName]);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();

  }
   initializeMagic() {

     var self = this;

     this.magic.registerOpenFormCallback(formName => {
       this.InjectComponent(formName);
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
