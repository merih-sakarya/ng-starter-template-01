import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@core/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {}

  logout() {
    this.authenticationService.logout();
  }
}
