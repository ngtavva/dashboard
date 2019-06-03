import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: 'card', component: CardComponent },
  { path: 'details', component: CardDetailsComponent },
  { path: '', redirectTo: '/card', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
