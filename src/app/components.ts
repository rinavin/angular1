/**
 * Created by rinav on 19/07/2017.
 */
import {Demo1Component} from "./demos/demo1.component";
import {Demo2WithNgDynamicComponent} from "./demos/demo2WithNgDynamic.component";
import {TableTestComponent} from "./demos/table.test.component";
import {Called1Component} from "./demos/called1.component";
import {Called2Component} from "./demos/called2.component";
import {RunmeComponent} from "./POS/runme.comonent";
import {EnableVisibleTestComponent} from "./demos/enable-visible.test.component";

export class ComponentsList {

   static  compHash: { [x: string]: any } = {
    ["demo1"]: Demo1Component,
    ["demo2"]: Demo2WithNgDynamicComponent,
    ["table"]: TableTestComponent,
      ["called1"]: Called1Component,
     ["called2"]: Called2Component,
     ["runme"]: RunmeComponent,
     ["Rich Client - aa"]:EnableVisibleTestComponent
  };

  // getComponents()
  // {
  //   return components;
  // }
}
