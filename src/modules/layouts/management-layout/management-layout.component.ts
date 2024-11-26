import { Component } from '@angular/core';
import { SidebarComponent } from "../../common/sidebar/sidebar.component";
import { HeaderComponent } from "../../common/header/header.component";
import { FooterComponent } from "../../common/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-management-layout',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './management-layout.component.html',
  styleUrl: './management-layout.component.css'
})
export class ManagementLayoutComponent {

}
