import { Component, Input } from '@angular/core';
import { Item } from '../../dtos/item.dto';

@Component({
    selector: 'app-custom-list',
    templateUrl: './custom-list.component.html'
})
export class CustomListComponent {
    @Input() items: Item[] = [];
}