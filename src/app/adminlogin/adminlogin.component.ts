import { Component, ViewChild } from '@angular/core';
import { NgForm,FormControl,FormGroup,Validators} from '@angular/forms';
import { UsersService } from '../shared/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  @ViewChild('form', { static: false })
  authform!: NgForm;
  newLogin = {
    email: '',
    password: '',
  };

  constructor(private admin_table: UsersService, private router: Router) {}

  onSubmit() {
    try {
      this.newLogin.email = this.authform.value.email;
      this.newLogin.password = this.authform.value.password;
      this.admin_table.postAuthUser(this.newLogin);
    } catch (error) {
      console.log("error! User not found")
    }
  }
}
