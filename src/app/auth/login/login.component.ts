import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(6), Validators.maxLength(20), Validators.required])
  });

  public hide: boolean = true;


  constructor(private authService: AuthService, private appService: AppService, private router: Router) { }

  ngOnInit(): void {
  }
  
  public onLoginClick():void {
    if(this.form.valid) {
      this.authService.login(this.form.value.email, this.form.value.password).subscribe(data => {
        localStorage.setItem('user_info', JSON.stringify(data));
        this.router.navigate(['/dashboard']);
      }, error => {
        this.appService.openSnackBar(error.error.reason);
      })  
    }
    else{
      this.appService.openSnackBar("Please correct the errors.")
    }
    console.log("login click", "prakhar@kilobytetech.com", this.form.value)

  }
}
