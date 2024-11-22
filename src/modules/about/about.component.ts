import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// Import FontAwesomeModule
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  public homeQuiz: string = './assets/images/quiz-bg-01.jpeg'

  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMap = faMapLocationDot;

  public member01: string = './assets/images/avatar-2.png';
  public member02: string = './assets/images/avatar-7.png';
  public member03: string = './assets/images/avatar-9.png';
}
