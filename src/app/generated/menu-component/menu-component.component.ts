import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss']
})
export class MenuComponentComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  menuClick(menuId: number) {
    this.MenuClickEmitter.emit(menuId);
  }

  @Output()
  MenuClickEmitter: EventEmitter<number> = new EventEmitter<number>();
}
