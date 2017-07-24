import { Directive, ElementRef, Input, Output,OnInit } from '@angular/core';
import {TaskMagicService} from "../services/task.magics.service";
import {FormControl, FormControlName} from "@angular/forms";

@Directive({
   selector: '[magic]'
})
export class MagicDirectiveDirective implements OnInit{


   @Input('magic') id: string;
   @Input() rowId: string;
   @Input() events: any[] = [];

   get task(){ return this._task; }


   constructor(
      private element: ElementRef,
      private _task: TaskMagicService
   ) {}

   ngOnInit(): void {

      let htmlElement:HTMLElement = this.element.nativeElement;



      htmlElement.addEventListener('focus',(event)=>{

         this.task.insertEvent('focus', this.id, this.rowId);
      });


      htmlElement.addEventListener('click',(event)=>{

         this.task.insertEvent('click', this.id, this.rowId);
      });
      //console.log(`magic-task-id: ${this.task.taskId}, property:${this.id}`);
      //if (htmlElement instanceof  HTMLInputElement  ){
      //   (<HTMLInputElement >htmlElement).property

      // switch(htmlElement.tagName){
      //   case 'button':
      //     //this.task.insertEvent('click', this.id, this.rowId);
      //     break;
      // }
   }
   ngDoCheck(){
      // if(this.rowId != 0){
      //    console.log(`DoCheck => magic-task-id: ${this.task.taskId}, property:${this.id}`);
      // }
   }

}
