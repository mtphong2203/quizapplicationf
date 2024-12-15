import { Component, Inject } from '@angular/core';
import { AUTH_SERVICE, USER_SERVICE } from '../../../constants/injection.constant';
import { IUserService } from '../../services/user/user.interface';
import { UserMasterDto } from '../../../models/user/user-master-dto.model';
import { IAuthService } from '../../services/auth/auth.interface';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  public userInformation: any;
  public data: any;

  constructor(@Inject(USER_SERVICE) private userService: IUserService, @Inject(AUTH_SERVICE) private authService: IAuthService) {
    this.authService.getUserInformation().subscribe((res) => {
      this.userInformation = res;
    });
  }






}
