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
import {OrderLocation} from "app/POS/orderLocation.component";
import {SelectDateAndTime} from "./POS/selectDateandTime.component";
import {DemoImageControlComponent} from "./demos/DemoImageControl.component";
import {DemoImageButtonControlComponent} from "./demos/DemoImageButtonControl.component";
import {DemoHyperTextButtonControlComponent} from "./demos/DemoHyperTextButtonControl.component";
import {MainOnlineScreenComponent} from "./POS/mainOnlineScreen.component";
import {ShoppingCartComponent} from "./POS/shoppingCart.component";
import {Component} from "@angular/core";
import {ComponentsListBase} from "./ComponentsListBase";
import {CallSubformwithTableComponent} from "./demos/call.subfrom.with.table.component";


export class ComponentsList extends ComponentsListBase{

   static  compHash: { [x: string]: any } = {
    ["demo1"]: Demo1Component,
    ["demo2"]: Demo2WithNgDynamicComponent,
    ["table"]: TableTestComponent,
     ["called1"]: Called1Component,
     ["called2"]: Called2Component,
     ["runme"]: RunmeComponent,
     ["Rich Client - aa"]:EnableVisibleTestComponent,
     ["OrderLocation"]:OrderLocation,
     ["ResidentPickupDateTime"]:SelectDateAndTime,
     ["DemoImageControlForm"]: DemoImageControlComponent,
     ["DemoImageButtonControlForm"]: DemoImageButtonControlComponent,
     ["DemoHyperTextButtonControlForm"]: DemoHyperTextButtonControlComponent,
     ["3_Main Online Screen"]: MainOnlineScreenComponent,
     ["ShoppingCart"]: ShoppingCartComponent,
     ["CallSubformwithTable"]:CallSubformwithTableComponent
  };

  public getComponents(name: string) : Component
  {
    return ComponentsList.compHash[name];
  }
}
