import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-403',
  standalone: true,
  imports: [],
  templateUrl: './page-403.component.html',
  styleUrl: './page-403.component.css'
})
export class Page403Component {
  constructor(private router: Router) { }

  public backHome(): void {
    this.router.navigate(['/']);
  }
}
