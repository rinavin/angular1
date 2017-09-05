import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {TaskMagicService} from "../services/task.magics.service";
import {FormControl, FormControlName} from "@angular/forms";
import {GuiCommand} from "../services/GuiCommand";
import {CommandType} from "./enums";

@Directive({
  selector: '[magic]'
})
export class MagicDirectiveDirective implements OnInit {


  @Input('magic') id: string;
  @Input() rowId: string;
  @Input() events: any[] = [];
  htmlElement: HTMLElement;

  get task() {
    return this._task;
  }


  constructor(private element: ElementRef,
              private renderer: Renderer2,
              private _task: TaskMagicService) {
    this.htmlElement = this.element.nativeElement;
  }

  regEvents(){
    //let htmlElement: HTMLElement = this.element.nativeElement;
    let events:string[]  = ['focus', 'click'];

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
        .filter(updates => updates.CtrlName == this.id)
        //.map(updates => updates.properties.Properties)
        .subscribe( a=>{


          let command:GuiCommand = a;
          switch (command.CommandType)
          {
            case CommandType.SET_PROPERTY:
              this.renderer.setProperty(
                this.htmlElement,
                command.Operation,
                command.str
              );
              break;
            case  CommandType.SET_VALUE:
              this.task.record.controls[this.id].setValue(command.str);
              break;
            case CommandType.SET_ATTRIBITE:
              if (command.Operation == "readOnly" && command.str != "true"  )
                this.renderer.removeAttribute(this.htmlElement, command.Operation);
              else
                this.renderer.setAttribute(this.htmlElement, command.Operation, command.str);
              break;

          }
          //for(let prop in properties){
          //   if( command.CommandType == CommandType.PROP_SET_TEXT ){
          //
          //     //console.log(`set text to ${this.id} value:${command.str}`);
          //     //this.task.record.controls[this.id].setValue(command.str);
          //     //.controls['a'].setValue('a');//         //(thiscontrols[this.id].setValue(command.str);
          //     //this.renderer.setAttribute(this.htmlElement, 'value', command.str.toString());
          //
          //     // this.renderer.setValue(
          //     //   this.htmlElement,
          //     //   command.str.toString()
          //     // );
          //   }
          //}
          });




          //htmlElement[propId] = value;
         /* switch (msg.propType){
            case 'property':
              this.renderer.setProperty(
                this.htmlElement,
                msg.propId,
                msg.value
              );
              break;

            case 'style':
              this.renderer.setStyle(
                this.htmlElement,
                msg.propId,
                msg.value
              );
              break;

            case 'content':
              this.renderer.setValue(
                this.htmlElement,
                msg.value
              );
              break;

            case 'attr':
              this.renderer.setAttribute(
                this.htmlElement,
                msg.propId,
                msg.value
              );
              break;

          }*/

    }


  ngOnInit(): void {
    /*console.log(`magic-task-id: ${this.task.taskId}, property:${this.id}`);
    console.log('this.element.nativeElement', this.element.nativeElement);*/

    this.regEvents();
    this.regUpdatesUI();





    /*this.task.updateDomProperties$.subscribe(p=>{
      htmlElement[p.key] = p.value;
    })*/




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
