import {Component, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {MagicEngine} from "./magic/src/services/magic.engine";
import {ComponentsList} from "./components";
import {BaseTaskMagicComponent} from "./magic/src/ui/app.baseMagicComponent";
import {ActivatedRoute, Router} from "@angular/router";

declare let myExtObject: any;

@Component({
  selector: 'app-root',
  template: `
    <app-menu-component (MenuClickEmitter)="invokeMenu($event)"></app-menu-component>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {//extends BaseTaskMagicComponent implements OnInit {
  constructor(protected magic: MagicEngine,
              private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef,
              protected router: Router, private route: ActivatedRoute) {
    this.initializeMagic();
    BaseTaskMagicComponent.componentsListBase = new ComponentsList();
    magic.startMagic();
  }

  invokeMenu(menuId: number): void {
    this.magic.insertEvent("", "menuclick", "", menuId.toString());
    alert(menuId);
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

  private InjectComponent(formName: string) {

    //this.router.navigate(['/' + formName]);
    //alert(formName);
    // const factory = this.componentFactoryResolver.resolveComponentFactory(ComponentsList.compHash[formName]);
    // const ref = this.viewContainerRef.createComponent(factory);
    // ref.changeDetectorRef.detectChanges();

  }
}

