import { Component, OnInit,Input } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }
  @Input('group')
  public orderForm: FormGroup;
  ngOnInit() {

  }

}
