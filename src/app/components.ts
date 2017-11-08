/**
 * Created by rinav on 19/07/2017.
 */

import {SampleComponent} from "./demos/sample.component";
import {ComponentsListBase} from "./ComponentsListBase";
import {Component} from "@angular/core";


export class ComponentsList extends ComponentsListBase {

  static compHash: { [x: string]: any } = {

    ["called2"]: SampleComponent

  };

  public getComponents(name: string): Component {
    return ComponentsList.compHash[name];
  }
}
