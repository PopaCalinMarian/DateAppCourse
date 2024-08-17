import { inject, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, BsDropdownModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
 accountService = inject(AccountService);//using di to inject the acc service we just created
  model: any = {};
  //i: ce plm e asta cu model any de sus / r: aparent ia parametrii de la user model
  login()
  {
    //console.log(this.model);
    this.accountService.login(this.model).subscribe(
      {
        next: response =>
        {
          console.log(response);
          //this.loggedIn = true;
        },
        error: error => console.log(error)
      }
    )
  }

  logout()
  {
    this.accountService.logout();
  }
}
