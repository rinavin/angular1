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
     magic.startMagic();
   }
   components: { [x: string]: any} = {
    ["demo1"]: Demo1Component,
    ["demo2"]: Demo2WithNgDynamicComponent,
     ["table"]:TableTestComponent
};

  private InjectComponent(formName:string) {
    alert(formName);
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.components[formName]);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();

  }

//    id: string;
//    name: string;
//    user: FormGroup;

//    // list: any;
//    // cb = name => {
//    //    return (<FormControl>this.user.controls[name]).value;
//    //



//    ngOnInit() {
//       this.user = new FormGroup({
//          name: new FormControl(''),
//          id: new FormControl(''),


//       });
//    }

//    GetValueCallback(): any {
//       return name => {
//          return (this.user.controls[name] as FormControl).value;
//       };
//    }

   initializeMagic() {

      var self = this;

     this.magic.registerOpenFormCallback(formName => {
       this.InjectComponent(formName);
     });

     //myExtObject.registerGetValueCallback(this.GetValueCallback());
      // name => {
      //   return (<FormControl>this.user.controls[name]).value;
      // });
      // myExtObject.registerGetValueCallback(name => {
      //    return (<FormControl>this.user.controls[name]).value;
      // });
      // myExtObject.registerShowMessageBox(msg => {
      //    alert(msg);
      // });
      // myExtObject.registerRefreshUI(data => {
      //       var obj = JSON.parse(data);
      //       //alert(data);
      //       // self.id = obj[1].Value;
      //       // self.name = obj[3].Value;
      //       (<FormControl>this.user.controls['id'])
      //          .setValue(obj[1].Value, {onlySelf: true});
      //       (<FormControl>this.user.controls['name'])
      //          .setValue(obj[3].Value, {onlySelf: true});
      //       self.ref.detectChanges();
      //    }
      // );
      // myExtObject.registerRefreshTableUI(data => {
      //       this.list = JSON.parse(data);
      //       self.ref.detectChanges();
      //       // alert(this.list);
      //       // self.id = obj[1].Value;
      //       // self.name = obj[3].Value;
      //       // (<FormControl>this.user.controls['id'])
      //       //   .setValue(obj[1].Value, { onlySelf: true });
      //       // (<FormControl>this.user.controls['name'])
      //       //   .setValue(obj[3].Value, { onlySelf: true });
      //       // self.ref.detectChanges();
      //    }
      // );
      //
      // myExtObject.startMagic();
   }

   // buttonClick(index: number, line: number) {
   //
   //    myExtObject.insertEvent("Click", index, line);
   // }
   //
   // focusFunction(index: number) {
   //    myExtObject.insertEvent("Focus", index, 0);
   // }


}
export interface User {
   id: string;
   name: string;

}
