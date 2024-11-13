import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CustomButtonComponent } from './shared/base-components/custom-button/custom-button.component';
import { CustomInputComponent } from './shared/base-components/custom-input/custom-input.component';
import { CustomListComponent } from './shared/base-components/custom-list/custom-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    CustomListComponent,
    CustomButtonComponent,
    CustomInputComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
