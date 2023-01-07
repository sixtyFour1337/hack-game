import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TutorialService } from './providers/tutorial.service';
import { UserService } from './providers/user.service';
import { HomeComponent } from './container/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TutorialService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
