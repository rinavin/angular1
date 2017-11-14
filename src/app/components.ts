/**
 * Created by rinav on 19/07/2017.
 */

import {SampleComponent} from "./generated/sample/sample.component";
import {ComponentsListBase} from "./components.list.base";
import {Component} from "@angular/core";


export class ComponentsList extends ComponentsListBase {

  static compHash: { [x: string]: any } = {

    ["called2"]: SampleComponent,


  };

  public getComponents(name: string): Component {
    return ComponentsList.compHash[name];
  }

  public static getValue(key) {
    return ComponentsList.compHash[key];
  }
  public static getAllComponents() {
    return Object.keys(ComponentsList.compHash).map(ComponentsList.getValue);
  }

}
