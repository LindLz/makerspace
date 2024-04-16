import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './views/components/homepage/homepage.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'homepage' },
  { path: '', component: HomepageComponent },
  { path: '', loadChildren: () => import('./views/views.module').then(m => m.ViewsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
