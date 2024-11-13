import { Component, Input, OnInit } from '@angular/core';
import { SideMenuItemDto } from '../../shared/dtos/side-menu-item.dto';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    @Input() isOpen: boolean = true;
    @Input() user: any;

    sideMenuItems: SideMenuItemDto[] = [];


    ngOnInit(): void {
        this.setMenu();

    }
    setMenu() {
        this.sideMenuItems = [
            {
                label: 'Home', routerLink: 'home', icon: 'bi bi-house', visible: true
            },
            {
                label: 'About', routerLink: 'about', icon: 'bi bi-info-circle', visible: true
            },
        ]
    }
}