import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
    @Input() title: string = '';
    @Output() toggleSidebar = new EventEmitter<void>();
}