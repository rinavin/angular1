import { Directive, ElementRef, Input, Output,OnInit } from '@angular/core';
import {TaskMagicService} from "../services/task.magics.service";
import {FormControl, FormControlName} from "@angular/forms";

@Directive({
   selector: '[magic]'
})
export class MagicDirectiveDirective implements OnInit{


   @Input('magic') id: string;
   @Input() rowId: number = 0;
   @Input() events: any[] = [];

   get task(){ return this._task; }


   constructor(
      private element: ElementRef,
      private _task: TaskMagicService
   ) {}

   ngOnInit(): void {
      console.log(`magic-task-id: ${this.task.taskId}, property:${this.id}`);
      let htmlElement:HTMLElement = this.element.nativeElement;

      console.log('this.element.nativeElement', this.element.nativeElement);

      htmlElement.addEventListener('focus',(event)=>{
         console.log(`magicDrv focus taskId: ${this.task.taskId}`);
         this.task.insertEvent('focus', this.id, this.rowId);
      });


      htmlElement.addEventListener('click',(event)=>{
         console.log(`magicDrv click taskId: ${this.task.taskId}`);
         this.task.insertEvent('click', this.id, this.rowId);
      });
      console.log(`magic-task-id: ${this.task.taskId}, property:${this.id}`);
      //if (htmlElement instanceof  HTMLInputElement  ){
      //   (<HTMLInputElement >htmlElement).property

      // switch(htmlElement.tagName){
      //   case 'button':
      //     //this.task.insertEvent('click', this.id, this.rowId);
      //     break;
      // }
   }
   ngDoCheck(){
      if(this.rowId != 0){
         console.log(`DoCheck => magic-task-id: ${this.task.taskId}, property:${this.id}`);
      }
   }

}
