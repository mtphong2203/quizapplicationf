import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Page403Component } from './page-403/page-403.component';

const routes: Routes = [
  {
    path: '403',
    component: Page403Component
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class ErrorsModule { }
