export class SideMenuItemDto {
  label: string;
  routerLink?: string;
  icon?: string;
  visible: boolean;

  constructor(label: string, visible: boolean, routerLink?: string, icon?: string) {
    this.label = label;
    this.visible = visible;
    this.routerLink = routerLink;
    this.icon = icon;
  }
}