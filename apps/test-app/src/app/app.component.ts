import { Component } from '@angular/core';
import { TestComponent } from '@app/inputs';


@Component({
  standalone: true,
  selector: "test-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  imports: [TestComponent]
})
export class AppComponent {

}
