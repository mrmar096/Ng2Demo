import {Component} from '@angular/core';
import {DataService} from '../shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private dataService: DataService;
  constructor(dataService: DataService) {
    this.dataService = dataService;
  }
}

