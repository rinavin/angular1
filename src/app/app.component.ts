import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MagicEngine} from "./magic/src/services/magic.engine";
//import {BaseTaskMagicComponent} from './magic/src/ui/app.baseMagicComponent';


declare var myExtObject: any;
@Component({
   selector: 'app-root',
   template: `

      <tabletest></tabletest>
      <!--<div>-->
      <!--<form novalidate [formGroup]="user">-->
      <!--<label>-->
      <!--<span>Id:</span>-->
      <!--<input-->
      <!--type="text"-->
      <!--formControlName="id"-->
      <!--on-focus="focusFunction(1)">-->
      <!--</label>-->
      <!--<br>-->
      <!--<label>-->
      <!--<span>Name:</span>-->
      <!--<input-->
      <!--type="text"-->
      <!--formControlName="name"-->
      <!--on-focus="focusFunction(3)">-->
      <!--</label>-->
      <!--</form>-->
      <!--<ul class="heroes">-->

      <!--<li *ngFor="let o of list">-->
      <!--<span class="hero-element">-->
      <!--<span class="badge">{{o.controls[0].Value}}</span>-->
      <!--<span class="badge">{{o.controls[1].Value}}</span>-->
      <!--<span class="badge">{{o.Line}}</span>-->

      <!--<button class="delete-button"-->
      <!--magic="6"-->
      <!--[rowId]="o.Line">-->
      <!--Show -->
      <!--</button>-->

      <!--</span>-->
      <!--</li>-->

      <!--</ul>-->
      <!--<div>-->
      <!--<div style="display: in-line">-->
      <!--&lt;!&ndash;<m-button id=4>&ndash;&gt;-->
      <!--<button-->
      <!--magic="2"-->

      <!--class="btn btn-default"-->
      <!--(click)="buttonClick(4, 0)">-->
      <!--Next-->
      <!--</button>-->
      <!--<button class="btn btn-default" (click)="buttonClick(5, 0)">Previous</button>-->
      <!--</div>-->

      <!--<br>-->
      <!--</div>-->
      <!--</div>-->
   `})
export class AppComponent {//extends BaseTaskMagicComponent implements OnInit {
constructor(protected magic: MagicEngine) {
     magic.startMagic();
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
