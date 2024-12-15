import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizService } from '../services/common/common.service';
import { UserProfileComponent } from './user/user-profile.component';

const routes: Routes = [
  {
    path: 'quizzes',
    component: QuizzesComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }

]


@NgModule({
  declarations: [],
  providers: [QuizService],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class CustomerModule { }
