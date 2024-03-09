import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  constructor(public sanitized: DomSanitizer) {}

  @Input()
  header?: string = '';
  @Input() body: string = '';
  @Input() footer?: string = '';
  @Input() id: string = '';
}
