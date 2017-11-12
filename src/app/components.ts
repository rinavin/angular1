/**
 * Created by rinav on 19/07/2017.
 */

import {SampleComponent} from "./generated/sample/sample.component";
import {ComponentsListBase} from "./components.list.base";
import {Component} from "@angular/core";
import {Called1Component} from "./generated/called1/called1.component";


export class ComponentsList extends ComponentsListBase {

  static compHash: { [x: string]: any } = {

    ["called2"]: SampleComponent,
    ["called1"]: Called1Component

  };

  public getComponents(name: string): Component {
    return ComponentsList.compHash[name];
  }
}
