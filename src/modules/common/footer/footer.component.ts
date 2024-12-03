import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// Import FontAwesomeModule
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule, DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  public logoFooter: string = './assets/images/logo.png';

  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMap = faMapLocationDot;


  public dateFooter: Date = new Date(2024, 4, 22);
}
