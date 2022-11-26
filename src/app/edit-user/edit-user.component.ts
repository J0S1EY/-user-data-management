import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  urlData: any
  userDetails: any

  constructor(private urlid: ActivatedRoute, private UserData: UserdataService, private router: Router) {

  }

  ngOnInit(): void {
    this.urlid.params.subscribe((result) => {
      this.urlData = result['id']
    })
    this.UserData.viewUser(this.urlData).subscribe((result) => {
      this.userDetails = result
    })
  }
  updateUser(userForm: any) {
    let updatedUserform = {
      "id": userForm.value.idNumber,
      "firstName": userForm.value.firstName,
      "lastName": userForm.value.lastName,
      "maidenName": userForm.value.maidenName,
      "age": userForm.value.age,
      "gender": userForm.value.gender,
      "email": userForm.value.eMail,
      "phone": userForm.value.phoneNumber,
      "username": userForm.value.username,
      "password": userForm.value.password,
      "birthDate": userForm.value.birthDate,
      "image": userForm.value.imageUrl,
      "bloodGroup": userForm.value.bloodGroup,
      "height": userForm.value.height,
      "weight": userForm.value.weight,
      "eyeColor": userForm.value.eyeColor,
      "hair": {
        "color": userForm.value.hairColor,
        "type": userForm.value.hairType,
      },
      "domain": userForm.value.website,
      "ip": userForm.value.ipAddress,
      "address": {
        "address": userForm.value.address,
        "city": userForm.value.city,
        "coordinates": {
          "lat": userForm.value.lat,
          "lng": userForm.value.lng
        },
        "postalCode": userForm.value.postalCode,
        "state": userForm.value.state
      },
      "macAddress": userForm.value.macAddress,
      "university": userForm.value.university,
      "bank": {
        "cardExpire": userForm.value.cardExpire,
        "cardNumber": userForm.value.cardNumber,
        "cardType": userForm.value.cardType,
        "currency": userForm.value.currency,
        "iban": userForm.value.iban
      },
      "company": {
        "address": {
          "address": userForm.value.cAddress,
          "city": userForm.value.cCity,
          "coordinates": {
            "lat": userForm.value.coordinatesLat,
            "lng": userForm.value.coordinatesIng
          },
          "postalCode": userForm.value.cpostalCode,
          "state": userForm.value.cState
        },
        "department": userForm.value.department,
        "name": userForm.value.companyName,
        "title": userForm.value.jobTitle
      },
      "ein": userForm.value.ein,
      "ssn": userForm.value.ssn,
      "userAgent": userForm.value.userAgent
    }

    this.UserData.updateUser(this.urlData, updatedUserform).subscribe((result) => {
      alert('User Profile Updated')
      this.router.navigateByUrl('')
    })
  }
}
