import {Component, Directive, ElementRef, Input, OnInit, Renderer2, ViewContainerRef} from '@angular/core';
import { Host, Self, Optional } from '@angular/core';
import {TaskMagicService} from "../services/task.magics.service";
import {FormControl, FormControlName} from "@angular/forms";
import {GuiCommand} from "../services/GuiCommand";
import {CommandType} from "./enums";
import {Subform} from "./subform-component";
import {BaseTaskMagicComponent} from "./app.baseMagicComponent";
import {ControlMetadata, HtmlProperties} from "../controls.metadata.model";
import {isNullOrUndefined} from "util";


@Directive({
  selector: '[magic]'
})
export class MagicDirectiveDirective implements OnInit {


  @Input('magic') id: string;
  @Input() rowId: string;
  @Input() events: any[] = [];
  htmlElement: HTMLElement;
  component:BaseTaskMagicComponent;

  get task() {
    return this._task;
  }


  constructor(private element: ElementRef,
              private renderer: Renderer2,
              private _task: TaskMagicService,
              private vcRef: ViewContainerRef,

  ) {

    this.htmlElement = this.element.nativeElement;
    this.component = (<any>this.vcRef)._view.component as BaseTaskMagicComponent;

  }

  regEvents(){
    //let htmlElement: HTMLElement = this.element.nativeElement;
    let events:string[]  = ['focus', 'click'];
    console.log(" regEvents " + this.id)

    events.forEach(event => {
      this.htmlElement.addEventListener(event, (e) => {
        //console.log(`magicDrv ${event} taskId: ${this.task.taskId}`);
        this.task.insertEvent(event, this.id, this.rowId);
      });
    });
  }
  regUpdatesUI(){
    this.task
        .refreshDom
        .filter(updates => updates.CtrlName == this.id &&
          (((!isNullOrUndefined(updates.line))
          && updates.line.toString() == this.rowId) ||
            ( isNullOrUndefined(updates.line) && (this.rowId == "0" ||isNullOrUndefined(this.rowId) ))))
          .subscribe( a=> {
            let command: GuiCommand = a;
            if (isNullOrUndefined(this.rowId))
              this.rowId = '0';
             try {
               this.handleCommand(command);
            }
            catch (ex)
            {
              console.dir(ex);
            }
          }

          );

    }


  private handleCommand(command: GuiCommand) {
    switch (command.CommandType) {
      case CommandType.SET_PROPERTY:
        // this.renderer.setProperty(
        //   this.htmlElement,
        //   command.Operation,
        //   command.str
        // );


      case  CommandType.SET_VALUE:
        console.log(`SET_VALUE: ${this.task.taskId},rowId = ${this.rowId} property:${this.id} value ${command.str}`);
        break;
      case CommandType.SET_ATTRIBITE:
        if (command.Operation == "readOnly" && command.str != "true")
          this.renderer.removeAttribute(this.htmlElement, command.Operation);
        else
          this.renderer.setAttribute(this.htmlElement, command.Operation, command.str);
        break;

      case CommandType.CREATE_SUB_FORM:
        console.log("CREATE_SUB_FORM!!!");
        console.dir(command);
        this.component.addSubformComp(command.CtrlName, command.userDropFormat.toString(), command.str, command.fileName.toString());
        break;

    }
  }

  ngOnInit(): void {
    /*console.log(`magic-task-id: ${this.task.taskId}, property:${this.id}`);
    console.log('this.element.nativeElement', this.element.nativeElement);*/

    this.regEvents();
    this.regUpdatesUI();
   //console.log(`magic-task-id: ${this.task.taskId}, property:${this.id}`);

    //if (htmlElement instanceof  HTMLInputElement  ){
    //   (<HTMLInputElement >htmlElement).property

    // switch(htmlElement.tagName){
    //   case 'button':
    //     //this.task.insertEvent('click', this.id, this.rowId);
    //     break;
    // }
  }

  ngDoCheck() {
    // if(this.rowId != 0){
    //    console.log(`DoCheck => magic-task-id: ${this.task.taskId}, property:${this.id}`);
    // }
  }

}
