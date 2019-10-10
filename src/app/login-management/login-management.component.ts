import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-management',
  templateUrl: './login-management.component.html',
  styleUrls: ['./login-management.component.css']
})
export class LoginManagementComponent implements OnInit {
username:string;
password:string;
returnUrl:any;
  constructor(public route:ActivatedRoute) { }


  login(){ 
    // this.webService.webAction(Common.sv_login_user,{'email':this.user_name,'password':this.password}).subscribe(responseObj => { Common.Dlog(responseObj); Common.Dlog(JSON.stringify(responseObj.payload[0].user_id)); if (responseObj.status === 1 ) { //store useID localStorage.setItem('user_id', JSON.stringify(responseObj.payload[0].user_id)); //change page this.router.navigate([this.returnUrl]); this.openMessage(responseObj.message); } else { this.openMessage(responseObj.message); }

// })
// .catch((err) => Common.Dlog(err))
}
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  

}
