import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quiz/quiz-list.component';
import { RoleListComponent } from './role/role-list.component';
import { UserListComponent } from './user/user-list.component';
import { QuestionListComponent } from './question/question-list.component';

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
    path: 'quizs',
    component: QuizListComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ManagerModule { }
