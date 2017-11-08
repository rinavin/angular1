import {Component} from '@angular/core';

import {MagicEngine} from "./magic/src/services/magic.engine";
import { ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import {ComponentsList} from "./components";
import {BaseTaskMagicComponent} from "./magic/src/ui/app.baseMagicComponent";

declare var myExtObject: any;
@Component({
   selector: 'app-root',
   template: `
     
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

