import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faQuestion, faUser, faPersonCircleQuestion, faUserShield } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  public faQuiz = faPersonCircleQuestion;
  public faQuestion = faQuestion;
  public faUser = faUser;
  public faRole = faUserShield;
}
