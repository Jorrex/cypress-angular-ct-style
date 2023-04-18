import { Component } from '@angular/core';

@Component({
    standalone: true,
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'test',
    templateUrl: 'Test.component.html',
    styleUrls: ['Test.component.scss'],
    styles: [` button { background-color: lightblue; }`]
})
export class TestComponent {

}