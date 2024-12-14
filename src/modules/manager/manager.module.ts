import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quiz/quiz-list.component';
import { RoleListComponent } from './role/role-list.component';
import { UserListComponent } from './user/user-list.component';
import { QuestionListComponent } from './question/question-list.component';
import { ANSWER_SERVICE, QUESTION_SERVICE, QUIZ_SERVICE, ROLE_SERVICE, USER_SERVICE } from '../../constants/injection.constant';
import { UserService } from '../services/user/user.service';
import { RoleService } from '../services/role/role.service';
import { QuestionService } from '../services/question/question.service';
import { QuizService } from '../services/quiz/quiz.service';
import { AnswerService } from '../services/answers/answer.service';

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
    {
      provide: QUESTION_SERVICE,
      useClass: QuestionService
    },
    {
      provide: QUIZ_SERVICE,
      useClass: QuizService
    },
    {
      provide: ANSWER_SERVICE,
      useClass: AnswerService
    },
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ManagerModule { }
