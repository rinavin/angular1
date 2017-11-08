/**
 * Created by rinav on 19/07/2017.
 */

import {Called2Component} from "./demos/called2.component";
import {ComponentsListBase} from "./ComponentsListBase";
import {Component} from "@angular/core";



export class ComponentsList extends ComponentsListBase{

   static  compHash: { [x: string]: any } = {

     ["called2"]: Called2Component

  };

  public getComponents(name: string) : Component
  {
    return ComponentsList.compHash[name];
  }
}
