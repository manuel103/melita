import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent {
  @Input() text = "";
  @Input() icon = "";
  @Input() color = "";
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();
  isDarkTheme = false;

  onClick() {
    this.buttonClick.emit();
  }
}
