import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: []
})
export class ListComponent {
  @Output() changeList = new EventEmitter();
  @Input() list: Array<any>;
}
