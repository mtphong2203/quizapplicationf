import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube, faTiktok, faLinkedin } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule, ReactiveFormsModule],
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

  public feedBack: FormGroup

  constructor() {
    this.feedBack = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      message: new FormControl('', Validators.maxLength(255)),
    });
  }

  public onSubmit(): void {
    console.log(this.feedBack.value);

  }


}
