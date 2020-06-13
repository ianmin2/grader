import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

//@ APPLICATION COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuDropdownComponent } from './header/menu-dropdown/menu-dropdown.component';
import { MenuButtonComponent } from './header/menu-button/menu-button.component';
import { MenuRightComponent } from './header/menu-right/menu-right.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuDropdownComponent,
    MenuButtonComponent,
    MenuRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
