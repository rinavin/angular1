/**
 * Created by rinav on 05/07/2017.
 */
import {NgModule} from "@angular/core";
import {MagicEngine} from "./src/services/magic.engine";
import {TaskMagicService} from "./src/services/task.magics.service";
import {MagicDirectiveDirective} from "./src/ui/magic-directive.directive";
import {MagicLabelComponent} from "./src/ui/magic-label.component";
import {Demo1Component} from "./../demos/demo1.component";

@NgModule({
   declarations:[
      MagicDirectiveDirective,
      MagicLabelComponent
   ],
   exports: [
     MagicDirectiveDirective,
     MagicLabelComponent
   ],
   entryComponents: [Demo1Component],
})
export class MagicModule{
   static forRoot(){
      return {
         ngModule: MagicModule,
         providers: [
            MagicEngine,
            //TaskMagicService
         ]
      }
   }
}
