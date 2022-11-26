import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  search = new BehaviorSubject('')
  constructor(private userdata: HttpClient) { }
  //fetch data to user home 
  getUserdata() {
    return this.userdata.get('https://dummyjson.com/users')
  }
  //fetch data to user view page
  viewUser(userId: any) {
    return this.userdata.get('https://dummyjson.com/users/' + userId)

  }
  //add new user
  addNewuser(addUser:any){
   return this.userdata.post('https://dummyjson.com/users/', addUser)
  }
  updateUser(userurlId:any, userForm:any){
    return this.userdata.put('https://dummyjson.com/users/'+ userurlId, userForm)

  }
  DeleteUser(userurlId:any){
    return this.userdata.delete('https://dummyjson.com/users/'+ userurlId,)
  }

  


}
