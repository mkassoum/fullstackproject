import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { CompletedCoursesComponent } from './completed-courses/completed-courses.component';
import { CurrentlyLearningComponent } from './currently-learning/currently-learning.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: BodyComponent },
  { path: 'completed-courses', component: CompletedCoursesComponent },
  { path: 'currently-learning', component: CurrentlyLearningComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
  


  
}
