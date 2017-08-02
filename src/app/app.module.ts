import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { PastorsComponent } from './pastors/pastors.component';
import { SeremonsComponent } from './seremons/seremons.component';
import { FamiliesComponent } from './families/families.component';
import { PageNotFoundComponent } from './404/404.component';
import { routing } from './app.routing';
@NgModule({
  declarations: [
    AppComponent, AboutComponent, ContactComponent, EventsComponent, PastorsComponent,
    FamiliesComponent, SeremonsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
