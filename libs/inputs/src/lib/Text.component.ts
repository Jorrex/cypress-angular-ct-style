import { Component } from '@angular/core';

@Component({
    standalone: true,
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'text',
    templateUrl: 'Text.component.html',
    styleUrls: ['Text.component.scss'],
    styles: [` button { background-color: lightblue; }`]
})
export class TextComponent {

}