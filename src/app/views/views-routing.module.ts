import { RouterModule, Routes } from "@angular/router";
import { ViewsComponent } from "./views.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { AboutComponent } from "./components/about/about.component";
import { TrainingsComponent } from "./components/trainings/trainings.component";

const routes: Routes = [
  {
    path: '', component: ViewsComponent, children: [
      {path: 'homepage', component: HomepageComponent},
      {path: 'about', component: AboutComponent},
      {path: 'trainings', component: TrainingsComponent}

    ]
  }
];export const ViewsRoutingModule = RouterModule.forChild(routes);