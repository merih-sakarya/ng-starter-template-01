import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@core/services/authentication.service';
import { UserContextUtil } from '@shared/utils/user-context.util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  user = UserContextUtil.getUserContext();

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {}

  logout() {
    this.authenticationService.logout();
  }
}
