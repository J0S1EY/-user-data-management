import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserdataService } from '../service/userdata.service';


@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  urlid: any
  userDetails:any
  constructor(private urlId: ActivatedRoute, private userdata: UserdataService) {

  }
  ngOnInit(): void {
    this.urlId.params.subscribe((urlData) => {
      this.urlid = urlData['id']
      
    })
    this.userdata.viewUser(this.urlid).subscribe((result:any)=>{
      this.userDetails=result
    }
    )
  

  }
}
