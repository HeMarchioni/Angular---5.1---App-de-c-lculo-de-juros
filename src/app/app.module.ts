import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import { JurosSimplesComponent } from './juros-simples/juros-simples.component';
import { JurosCompostoComponent } from './juros-composto/juros-composto.component';
import {ReactiveFormsModule} from "@angular/forms";



const routes: Routes = [

  {path: '',redirectTo: '/home', pathMatch:'full' },
  {path: 'home',component: HomeComponent},
  {path: 'juros-simples',component: JurosSimplesComponent},
  {path: 'juros-composto',component: JurosCompostoComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    JurosSimplesComponent,
    JurosCompostoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }