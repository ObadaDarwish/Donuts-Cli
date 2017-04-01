import {Component, OnInit} from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';
import {NotificationsService} from 'angular2-notifications/src/notifications.service';
import {CateringService} from './catering.service';
import {escape} from "querystring";
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
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
  deliverydate: string;
  DonutsSum: number = 0;
  public options = {
    position: ["bottom", "right"],
    timeOut: 5000,
    lastOnBottom: true
  };

  constructor(private _fb: FormBuilder, private notify: NotificationsService, private cateringService: CateringService, private loading: SlimLoadingBarService) {

  }

  ngOnInit() {

    this.CateringOrder = this._fb.group({
      orders: this._fb.array([this.initorder(),]),
      username: ['', Validators.required],
      mobilenumber: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      DeliveryDate: ['', Validators.required],
      DeliveryTime: ['', Validators.required]
    });

  }

  sumbitOrder() {
     this.notify.info('Info', 'Sorry this service is not available at the current moment');
    // this.loading.start(()=> {
    //   console.log('Loading');
    // });
    //
    //
    // if (this.CateringOrder.valid) {
    //   this.username = this.CateringOrder.value.username;
    //   this.mobileNumber = this.CateringOrder.value.mobilenumber;
    //   this.email = this.CateringOrder.value.email;
    //   this.address = this.CateringOrder.value.address;
    //   this.deliverydate = this.CateringOrder.value.DeliveryDate + " " + this.CateringOrder.value.DeliveryTime;
    //
    //
    //   for (var _i = 0; _i <= this.NumberOfOrders; _i++) {
    //     this.DonutsSum += this.CateringOrder.controls['orders'].value[_i].DonutsNumber;
    //     this.orderArray.push({
    //       numberOFDonuts: this.CateringOrder.controls['orders'].value[_i].DonutsNumber,
    //       DonutsDressing: this.CateringOrder.controls['orders'].value[_i].DonutsDressing,
    //       DonutsTopping: this.CateringOrder.controls['orders'].value[_i].DonutsTopping,
    //     });
    //   }
    //   if (this.DonutsSum >= 50) {
    //     this.cateringService.postOrder(this.username, this.mobileNumber, this.email, this.address, this.deliverydate, JSON.stringify(this.orderArray)).subscribe(
    //       (response)=> {
    //
    //         this.notify.success('Success', 'Order has been submitted');
    //         this.CateringOrder.reset();
    //         this.loading.complete();
    //       },
    //       (error)=> {
    //         this.loading.complete();
    //         this.notify.error('Error', 'Order can not be submitted');
    //       }
    //     );
    //   }
    //   else {
    //     this.notify.info('Info', 'Total number of donuts should be greater than or equal 50');
    //     this.loading.complete();
    //   }
    //
    // }
    // else {
    //   this.notify.error('Error', 'All Fields are required');
    //   this.loading.complete();
    // }
  }

  initorder() {
    return this._fb.group({
      DonutsNumber: ['', Validators.required],
      DonutsDressing: ['', Validators.required],
      DonutsTopping: ['', Validators.required],
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
  }

}
