import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './core/error/error.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/brands'},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/404'},
  {path: '404', component: NotFoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
