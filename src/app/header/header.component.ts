import { Component, OnInit,  } from '@angular/core';
import { takeWhile } from 'rxjs';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sortKey:any
  constructor(private userdata:UserdataService){}

  ngOnInit(): void {
    
  }
  search(event:any){
     let searchKey=event.target.value;
     this.userdata.search.next(searchKey)
  }
}
