import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})

export class MenuButtonComponent {
  @Input()
  name: string = ''
  @Input()
  select: boolean = false

  @Output()
  click = new EventEmitter<void>()

  clickSelect() {
    this.click.emit()
  }
}
