import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  idNumber: any
  imageUrl: any
  website: any
  username: any
  password: any
  ipAddress: any
  macAddress: any
  userAgent: any
  ein: any
  ssn: any
  cardNumber: any
  cardType: any
  currency: any
  cardExpire: any
  iban: any
  firstName: any
  maidenName: any
  lastName: any
  address: any
  lat: any
  lng: any
  city: any
  university: any
  phoneNumber: any
  eMail: any
  gender: any
  birthDate: any
  age: any
  bloodGroup: any
  height: any
  weight: any
  eyeColor: any
  hairColor: any
  hairType: any
  companyName: any
  jobTitle: any
  department: any
  cAddress: any
  cCity: any
  cState: any
  cpostalCode: any
  coordinatesLat: any
  coordinatesIng: any
  postalCode: any
  state: any

  constructor(private userData: UserdataService, private Router: Router) {

  }
  ngOnInit(): void {

  }
  adduser() {

    let addUserdata = {
      "id": this.idNumber,
      "firstName": this.firstName,
      "lastName": this.lastName,
      "maidenName": this.maidenName,
      "age": this.age,
      "gender": this.gender,
      "email": this.eMail,
      "phone": this.phoneNumber,
      "username": this.username,
      "password": this.password,
      "birthDate": this.birthDate,
      "image": this.imageUrl,
      "bloodGroup": this.bloodGroup,
      "height": this.height,
      "weight": this.weight,
      "eyeColor": this.eyeColor,
      "hair": {
        "color": this.hairColor,
        "type": this.hairType,
      },
      "domain": this.website,
      "ip": this.ipAddress,
      "address": {
        "address": this.address,
        "city": this.city,
        "coordinates": {
          "lat": this.lat,
          "lng": this.lng
        },
        "postalCode": this.postalCode,
        "state": this.state
      },
      "macAddress": this.macAddress,
      "university": this.university,
      "bank": {
        "cardExpire": this.cardExpire,
        "cardNumber": this.cardNumber,
        "cardType": this.cardType,
        "currency": this.currency,
        "iban": this.iban
      },
      "company": {
        "address": {
          "address": this.cAddress,
          "city": this.cCity,
          "coordinates": {
            "lat": this.coordinatesLat,
            "lng": this.coordinatesIng
          },
          "postalCode": this.cpostalCode,
          "state": this.cState
        },
        "department": this.department,
        "name": this.companyName,
        "title": this.jobTitle
      },
      "ein": this.ein,
      "ssn": this.ssn,
      "userAgent": this.userAgent
    }
    this.userData.addNewuser(addUserdata)
      .subscribe(() => {
        alert("User Data Successfully Added")
        this.Router.navigateByUrl('')
      })
    console.log(addUserdata)
  }
}
