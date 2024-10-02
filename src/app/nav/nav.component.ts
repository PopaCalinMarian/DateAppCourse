import { inject, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, BsDropdownModule, RouterLink, RouterLinkActive, TitleCasePipe],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
 accountService = inject(AccountService);//using di to inject the acc service we just created
 private router = inject(Router); 
 private toastr = inject(ToastrService);
 model: any = {};

  //i: ce plm e asta cu model any de sus / r: aparent ia parametrii de la user model
  login()
  {
    //console.log(this.model);
    this.accountService.login(this.model).subscribe(
      {
        next: _ =>
        {
          this.router.navigateByUrl('/members')
          //this.loggedIn = true;
        },
        error: error => this.toastr.error(error.error)//nstead of making a console error we are making a toastr popup error
      }//the param is the actual error we are gonna display
    )
  }

  logout()
  {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
