import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { Routes, RouterModule } from '@angular/Router';

import { AppComponent } from './app.component';

import { AboutusComponent } from './aboutus/aboutus.component';
import { TeamComponent } from './team/team.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { AnantComponent } from './anant/anant.component';


const AppRoutes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'anant', component: AnantComponent }

]


@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    TeamComponent,
    ContactusComponent,
    HomeComponent,
    AnantComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
