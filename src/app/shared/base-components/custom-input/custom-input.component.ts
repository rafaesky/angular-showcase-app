import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-custom-input',
    templateUrl: './custom-input.component.html'
})
export class CustomInputComponent {
    @Input() label: string = '';
    @Input() placeholder: string = '';
    @Input() type: string = 'text';
    @Input() disabled: boolean = false;
    @Input() value: string = '';
}
