import { CommonModule } from '@angular/common';
import { Component, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { AUTH_SERVICE } from '../../../constants/injection.constant';
import { IAuthService } from '../../services/auth/auth.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public logo: string = './assets/images/logo.png';
  public logoUser: string = './assets/images/avatar-5.png';

  public isAuthenticated: boolean = false;
  public userInformation: any;
  public isShow: boolean = false;

  constructor(private router: Router, @Inject(AUTH_SERVICE) private authService: IAuthService) {
    this.authService.isAuthenticated().subscribe(res => {
      this.isAuthenticated = res;
    });

    this.authService.getUserInformation().subscribe(res => {
      this.userInformation = res;
    })
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  public isShowDetail(): void {
    this.isShow = !this.isShow;
  }

}
