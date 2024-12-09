import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quiz/quiz-list.component';
import { RoleListComponent } from './role/role-list.component';
import { UserListComponent } from './user/user-list.component';
import { QuestionListComponent } from './question/question-list.component';
import { ROLE_SERVICE, USER_SERVICE } from '../../constants/injection.constant';
import { UserService } from '../services/user/user.service';
import { RoleService } from '../services/role/role.service';

const routes: Routes = [
  {
    path: 'roles',
    component: RoleListComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'questions',
    component: QuestionListComponent
  },
  {
    path: 'quizzes',
    component: QuizListComponent
  },
  {
    path: '**',
    redirectTo: 'quizzes',
    pathMatch: 'full'
  }

]

@NgModule({
  declarations: [],
  providers: [
    {
      provide: USER_SERVICE,
      useClass: UserService
    },
    {
      provide: ROLE_SERVICE,
      useClass: RoleService
    },
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ManagerModule { }
