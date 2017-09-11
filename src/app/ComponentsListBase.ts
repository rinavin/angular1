import {Component} from "@angular/core";
/**
 * Created by rinav on 11/09/2017.
 */
export abstract class ComponentsListBase
{
  public  abstract getComponents(name: string) : Component;

}
