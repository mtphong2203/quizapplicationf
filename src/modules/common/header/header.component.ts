import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  public currentPage: string = '';

  public logo: string = './assets/images/logo.png';
  public logoUser: string = './assets/images/avatar-5.png';

  /**
   *
   */
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
        this.currentPage = event.urlAfterRedirects.split('/')[1];
      });
    this.currentPage = this.router.url.split('/')[1];
  }


}
