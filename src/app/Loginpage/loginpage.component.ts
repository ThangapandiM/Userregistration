import { NgModule, Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './loginpage.html',
  styleUrls: [ './loginpage.css' ]
})
export class loginComponent  {
  hide = true;
  UserEmail:string;
  loginform: FormGroup;
  Invaliduser:string="";
  Password:string;
  constructor(public router: Router,private formBuilder: FormBuilder){

}
  AccountReg(){
this.router.navigate(['/createaccount']);
  }
  Loginprovider(){
    debugger
    let Provideruserdetail=JSON.parse(sessionStorage.getItem('provider'));
    if(Provideruserdetail!=null){
  if(Provideruserdetail.Email==this.loginform.value.clientEmail &&Provideruserdetail.Password==this.loginform.value.Clientpwd){

    this.router.navigate(['/welcome',Provideruserdetail.FirstName])

  }
  else{
this.Invaliduser="Invalid User"
  }
}
else{
  this.Invaliduser="Invalid User"
}
    
  }
  ngOnInit(): void {
    this.loginform = this.formBuilder.group(this.initForm());
    
  }
  LoginClient(){

    let Clientuserdetail=JSON.parse(sessionStorage.getItem('Client'));
    if(Clientuserdetail!=null){
    if(Clientuserdetail.Email==this.loginform.value.clientEmail &&Clientuserdetail.Password==this.loginform.value.Clientpwd){
      // this.router.navigate(['/welcome',{ queryParams: {id: 37, username: 'jimmy'}}]);
      this.router.navigate(['/welcome',Clientuserdetail.FirstName])

    }
    else{
      this.Invaliduser="Invalid User"
    }
  }
  else{
    this.Invaliduser="Invalid User"
  }
  }
  initForm(): any {
    let aFormElements: any = (
      ({

        clientEmail: ['',
          {
            validators: [
              Validators.required,
              Validators.minLength(0),
              Validators.maxLength(25),
            ],
          
          }],
          Clientpwd: ['',
          {
            validators: [
              Validators.required,
              Validators.minLength(0),
              Validators.maxLength(25),
            ],
          
          }],
       
        

      }));
    return aFormElements;
  }
}
