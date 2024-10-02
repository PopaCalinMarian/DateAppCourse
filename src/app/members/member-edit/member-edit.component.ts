import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Member } from '../../_models/member';
import { AccountService } from '../../_services/account.service';
import { MembersService } from '../../_services/members.service';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-member-edit',
  standalone: true,
  imports: [TabsModule, FormsModule],
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.css'
})
export class MemberEditComponent implements OnInit{

  @ViewChild('editForm') editForm?: NgForm;
  member?: Member;
  private accountService = inject(AccountService);
  private memberService = inject(MembersService);  
  private toastr = inject(ToastrService);
  ngOnInit(): void {
    this.loadMember();
  } //we need oninit to get data

  loadMember()
  {
    const user = this.accountService.currentUser();//this is a signal so we need to execute the value afterwards
    if (!user) return;
    this.memberService.getMember(user.userName).subscribe({
      next: member => this.member = member
    })
  }

  updateMember() {
    console.log(this.member);
    this.toastr.success('Profile updated successfuly');
    this.editForm?.reset(this.member);//basically reseting the form after user makes changes to profile
  }
}
