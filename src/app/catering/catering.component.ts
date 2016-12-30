import {Component, OnInit} from '@angular/core';
import {FormGroup, FormArray, FormBuilder} from '@angular/forms';
import {NotificationsService} from 'angular2-notifications/src/notifications.service';
import {CateringService} from './catering.service';
@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.css']
})
export class CateringComponent implements OnInit {

  public CateringOrder: FormGroup;
  NumberOfOrders: number = 0;
  orderArray: Array<any> = [];
  username: string;
  mobileNumber: string;
  email: string;
  address: string;

  constructor(private _fb: FormBuilder, private notify: NotificationsService, private cateringService: CateringService) {
  }

  ngOnInit() {

    this.CateringOrder = this._fb.group({
      orders: this._fb.array([this.initorder(),]),
      username: [''],
      mobilenumber: [''],
      email: [''],
      address: ['']
    });

  }

  sumbitOrder() {
    this.username = this.CateringOrder.value.username;
    this.mobileNumber = this.CateringOrder.value.mobilenumber;
    this.email = this.CateringOrder.value.email;
    this.address = this.CateringOrder.value.address;


    for (var _i = 0; _i <= this.NumberOfOrders; _i++) {
      this.orderArray.push({
        numberOFDonuts: this.CateringOrder.controls['orders'].value[_i].DonutsNumber,
        DonutsDressing: this.CateringOrder.controls['orders'].value[_i].DonutsDressing,
        DonutsTopping: this.CateringOrder.controls['orders'].value[_i].DonutsTopping,
        DeliveryDate: this.CateringOrder.controls['orders'].value[_i].DeliveryDate + " " + this.CateringOrder.controls['orders'].value[_i].DeliveryTime
      });
      // this.orderArray.push([this.CateringOrder.controls['orders'].value[_i].DonutsNumber,
      //   this.CateringOrder.controls['orders'].value[_i].DonutsDressing,
      //   this.CateringOrder.controls['orders'].value[_i].DonutsTopping,
      //   this.CateringOrder.controls['orders'].value[_i].DeliveryDate + " " + this.CateringOrder.controls['orders'].value[_i].DeliveryTime
      // ]);
    }
    console.log(JSON.stringify(this.orderArray));
    this.cateringService.postOrder(this.username,this.mobileNumber,this.email,this.address,JSON.stringify(this.orderArray)).subscribe(
      (response)=> {
        console.log('Done : ' + response);
      },
      (error)=> {
        console.log('error : ' + error);
      }
    );
  }

  initorder() {
    return this._fb.group({
      DonutsNumber: [''],
      DonutsDressing: [''],
      DonutsTopping: [''],
      DeliveryDate: [''],
      DeliveryTime: ['']
    });
  }

  addorder() {
    const control = <FormArray>this.CateringOrder.controls['orders'];
    control.push(this.initorder());
    this.NumberOfOrders += 1;
  }

  removeorder(i: number) {
    const control = <FormArray>this.CateringOrder.controls['orders'];
    control.removeAt(i);
    console.log('Close clicked');
  }

}
