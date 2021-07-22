import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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


  constructor(private authService: AuthService, private appService: AppService) { }

  ngOnInit(): void {
  }
  
  public onLoginClick():void {
    if(this.form.valid) {
      this.authService.login(this.form.value.email, this.form.value.password).subscribe(data => {
        console.log(data);
        
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
