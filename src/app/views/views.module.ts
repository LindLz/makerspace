import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { ViewsRoutingModule } from './views-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { AnimationService } from './animation.service';
import { TrainingsComponent } from './components/trainings/trainings.component';



@NgModule({
  declarations: [
    ViewsComponent,
    HomepageComponent,
    AboutComponent,
    TrainingsComponent,
    
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    NzCarouselModule
    
  ]
})
export class ViewsModule { }
