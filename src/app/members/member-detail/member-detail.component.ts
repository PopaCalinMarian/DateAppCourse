import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from '../../_services/members.service';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../../_models/member';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';


@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [TabsModule, GalleryModule],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css'
})
export class MemberDetailComponent implements OnInit{
  //we are gonna modify this component as so the buttons click on each member does something
  private memberService = inject(MembersService);
  private route = inject(ActivatedRoute); // we need this so we can access member username as parameter
  member?: Member;//apparently ts does not know that we can get back a member from the api so we make this optional
  images: GalleryItem[] = []; //generating photos propery from the nggallery module

  ngOnInit(): void{
    this.loadMember()
  }

  loadMember() {
    const username = this.route.snapshot.paramMap.get('username')
    //and we can get the route to username parameter with paramMap
    // apparenly once is found the route it takes a snapshot
    if(!username) return;
    this.memberService.getMember(username).subscribe({
      next: member => { 
        this.member = member;
        member.photos.map(p => {
            this.images.push(new ImageItem({src: p.url, thumb: p.url}))
        })//mapping for each photo of the member an image entity from nggallery(not sure if this is correct)
       }
    })
  }
}

