import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube, faTiktok, faLinkedin } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public name: string = '';
  public email: string = '';
  // icon
  public faEmail = faEnvelope;
  public faPhone = faPhone;
  public faMap = faMapMarkedAlt;
  // brands
  public faceBookIcon = faFacebook;
  public youtubeIcon = faYoutube;
  public tiktokIcon = faTiktok;
  public linkedinIcon = faLinkedin;
}
