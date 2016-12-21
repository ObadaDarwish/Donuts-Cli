import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NotificationsService} from 'angular2-notifications/src/notifications.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public options = {
    position: ["bottom", "right"],
    timeOut: 5000,
    lastOnBottom: true
  }
  constructor(private route: Router,private notification: NotificationsService ) {
  }

  ngOnInit() {

  }
  testnotification(){
    this.notification.alert('test','test');
  }
}
