import { NgModule } from '@angular/core';
import { TextComponent } from 'libs/inputs/src/lib/Text.component';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [TextComponent]
})
export class AppModule {

}