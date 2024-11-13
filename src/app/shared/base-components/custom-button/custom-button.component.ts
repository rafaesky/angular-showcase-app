import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-custom-button',
    templateUrl: './custom-button.component.html',
    styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {
    @Input() color: 'primary' | 'accent' | 'warn' = 'primary';  // Valores válidos para o 'color'
    @Input() label: string = 'Default Label';  // Valor padrão para o label
    @Input() disabled: boolean = false;  // Valor padrão para disabled
}