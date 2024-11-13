import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Item } from '../../shared/dtos/item.dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(private dataService: DataService) { }

  items: Item[] = [];

  ngOnInit() {
    this.dataService.getItems().subscribe(data => {
      this.items = data;
    });
  }
}
