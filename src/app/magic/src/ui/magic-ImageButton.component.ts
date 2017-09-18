import {ChangeDetectorRef, Component, Input, NgZone} from '@angular/core';

import {TaskMagicService} from "../services/task.magics.service";
import {MagicControlBase} from "./magic-control-base.component";

enum ButtonState
{
  FOCUS = 0,
  SELECTED = 1, // MOUSE_DOWN
  DISABLE = 2,
  NORMAL = 3,
  HOTTRACK = 4,
  DEFAULT_BUTTON = 5
}

@Component({
  selector: 'm-imageButton',
  template: `    
    <button 
      [disabled]="!(enable)" 
      [ngStyle]="GetStyle()" 
      (mouseenter)="OnMouseEnter()" 
      (mouseleave)="OnMouseLeave()"
      (mouseup)="OnMouseUp()" 
      (mousedown)="OnMouseDown()" 
      (focus)="OnFocus()">
      {{ getFormat }}
    </button>
  `
})

export class MagicImageButtonComponent extends MagicControlBase {
  http: any;
  // save the w\h of the all image
  widthOfAllImage: number = 0;
  heightOfAllImage: number = 0;
  // save the
  buttonStateId: number = ButtonState.NORMAL;

  tagOnHovering: boolean = false;
  tagOnMouseDown: boolean = false;
  support6Images: boolean = true;//button.Supports6Images();

  constructor(protected task: TaskMagicService, public dc: ChangeDetectorRef) {
    super(task)
  }

  GetStyle() {
    let style = {
      'background-image': `url(${this.GetValue()})`,
      'background-position' : `${this.GetBackgroundPosition()} 0`,
      'width': `${this.widthOfOneImageStr()}`,
      'height': `${this.heightOfOneImageStr()}`,
    };
    return style;
  }


  OnMouseEnter() {
    this.tagOnMouseDown = false;
    this.tagOnHovering = true;
    this.RefreshButtonImage();
  }

  OnMouseLeave() {
    this.tagOnHovering = false;
    this.RefreshButtonImage();
  }

  OnMouseDown() {
    this.tagOnMouseDown = true;
    this.RefreshButtonImage();
  }

  OnMouseUp() {
    this.tagOnMouseDown = false;
    this.RefreshButtonImage();
  }

  OnFocus() {
    this.RefreshButtonImage();
  }

  GetBackgroundPosition() {
    this.CalcSizeOfAllImage();
    var strPartLocation: number = (this.widthOfOneImage() * this.buttonStateId);
    if (this.tagOnMouseDown)
      strPartLocation = (this.widthOfOneImage() * ButtonState.SELECTED);
    return '-' + strPartLocation + 'px';
  }

  widthOfOneImage() {
    var widthOfOneImage: number = this.widthOfAllImage / 6;

    return widthOfOneImage;
  }

  widthOfOneImageStr() {
    var stringwidthOfOneImage = this.widthOfOneImage() + 'px';
    return stringwidthOfOneImage;
  }

  heightOfOneImageStr() {
    var strRetValue = this.heightOfAllImage + 'px';
    return strRetValue;
  }

  RefreshButtonImage() {
    var Index: number = ButtonState.NORMAL;

    if (this.tagOnMouseDown)
      Index = ButtonState.SELECTED;
    else if (this.support6Images && this.tagOnHovering)
      Index = ButtonState.HOTTRACK;
     else if (!this.enable)//(!tg.Enabled)
       Index = ButtonState.DISABLE;
    // else if (button.Focused)
    //   Index = ButtonState.FOCUS;
    else {
      // if (this.support6Images && tg.DrawAsDefaultButton)
      //   Index = ButtonState.DEFAULT_BUTTON;
      // else
      Index = ButtonState.NORMAL;
    }

    this.SetButtonStateId(Index /*ButtonState.HOTTRACK*/);

    return Index;
  }

  SetButtonStateId(id: number) {
    this.buttonStateId = id;
    this.dc.detectChanges();
  }

  CalcSizeOfAllImage() {
    var i = new Image();
    i.src = this.GetValue();
    i.onload = (evt) => {
      this.widthOfAllImage = i.naturalWidth;
      this.heightOfAllImage = i.naturalHeight;
      this.RefreshButtonImage();
    };
  }
}
