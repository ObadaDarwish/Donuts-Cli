import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class CateringService {

  constructor(private http: Http) { }

  postOrder(username,mobile,email,address,cateringorder) {
    let headers = new Headers();
    let options = new RequestOptions({headers: headers});
    headers.append('Content-Type', 'application/json');
    var body = JSON.stringify({
      username:username,
      email:email,
      mobile:mobile,
      address:address,
      order:cateringorder
    });
    return this.http.post('http://localhost:8000/CateringOrder', body, options /*{headers: headers}*/)
      .map(response => {
        return response;
      });


  }
}
