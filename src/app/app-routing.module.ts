import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { CardComponent } from './card/card.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  
  {
    path: "card",
    component: CardComponent,
  },

  {
    path: "page",
    component: PageComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
