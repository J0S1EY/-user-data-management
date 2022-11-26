import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  userId: any
  constructor(private urlId: ActivatedRoute, private userdata: UserdataService, private router: Router) {

  }
  ngOnInit(): void {
    this.urlId.params.subscribe((result) => {
      this.userId = result['id']
    })
    this.userdata.DeleteUser(this.userId).subscribe(() => {
      alert('User Data Deleted')
      this.router.navigateByUrl('')
    }
    )
  }
}

