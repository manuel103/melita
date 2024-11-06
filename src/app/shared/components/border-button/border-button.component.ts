import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-border-button',
  templateUrl: './border-button.component.html',
  styleUrls: ['./border-button.component.scss']
})
export class BorderButtonComponent {
  @Input() text = "";
  @Input() icon = "";
  @Input() color = "";
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}
