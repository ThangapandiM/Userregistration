import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.sass']
})
export class ProviderComponent implements OnInit {
  providerform: FormGroup;
  Providerdata:Provider;
  hide = true;
  confirmpassworderror:string;
  constructor(private formBuilder: FormBuilder,public router: Router) { }

  ngOnInit(): void {
    this.providerform = this.formBuilder.group(this.initForm());
    this.initialize();
  }
  Submit(){
    debugger
    if(this.providerform.value.Password==this.providerform.value.ConfirmPassword){
    this.Providerdata.Accounttype="Provider";
    this.Providerdata.FirstName=this.providerform.value.FirstName;
    this.Providerdata.Email=this.providerform.value.Email;
    this.Providerdata.Password=this.providerform.value.Password;
    sessionStorage.setItem('provider',JSON.stringify(this.Providerdata))
    this.router.navigate(['/Login']);

    }
    else{
this.confirmpassworderror="Incorrect Password";
    }
  }

  initialize(){
    this.Providerdata={
      "Accounttype":"",
      "FirstName":"",
      "Email":"",
      "Password":"",
     

    }
  }
  initForm(): any {
    let aFormElements: any = (
      ({

        FirstName: ['',
          {
            validators: [
              Validators.required,
              Validators.minLength(0),
              Validators.maxLength(25),
            ],
          
          }],
          LastName: ['',
          {
            validators: [
              Validators.required,
              Validators.minLength(0),
              Validators.maxLength(24),
              
                 
            ],
           
          }],
          NPINumber: [''],
          Credential: ['',
          {
            validators: [
              Validators.required,
              Validators.minLength(0),
              Validators.maxLength(24),
              
                 
            ],
           
          }],
          PracticeName: ['',
          {
            validators: [
              Validators.required,
              Validators.minLength(0),
              Validators.maxLength(24),
              
                 
            ],
           
          }],
          Address: ['',
          {
            validators: [
              Validators.required,
              Validators.minLength(0),
              Validators.maxLength(24),
              
                 
            ],
           
          }],
          City: ['',
          {
            validators: [
              Validators.required,
              Validators.minLength(0),
              Validators.maxLength(24),
              
                 
            ],
           
          }],
          State: ['',
          {
            validators: [
              Validators.required,
              Validators.minLength(0),
              Validators.maxLength(24),
              
                 
            ],
           
          }],
          Zipcode: ['',
          {
            validators: [
              Validators.required,
              Validators.minLength(0),
              Validators.maxLength(24),
              
                 
            ],
           
          }],
          Country: ['',
          {
            validators: [
              Validators.required,
              Validators.minLength(0),
              Validators.maxLength(24),
              
                 
            ],
           
          }],
          PhoneNumber: ['',
          {
            validators: [
              Validators.required,
              Validators.minLength(0),
              Validators.maxLength(24),
              
                 
            ],
           
          }],
          FaxNumber: ['',
          {
            validators: [
              Validators.required,
              Validators.minLength(0),
              Validators.maxLength(24),
              
                 
            ],
           
          }],
          WebSite: ['',
          {
            validators: [
              Validators.required,
              Validators.minLength(0),
              Validators.maxLength(24),
              
                 
            ],
           
          }],
          Password: ['',
          {
            validators: [
              Validators.required,
              Validators.minLength(0),
              Validators.maxLength(24),
              
                 
            ],
           
          }],
          ConfirmPassword: ['',
          {
            validators: [
              Validators.required,
              Validators.minLength(0),
              Validators.maxLength(24),
              
                 
            ],
           
          }],
          Email: ['',
          {
            validators: [
              Validators.required,
              Validators.minLength(0),
              Validators.maxLength(24),
              
                 
            ],
           
          }],
        

      }));
    return aFormElements;
  }
}
export interface Provider{
  Accounttype:string;
  FirstName:string;
  Email:string;
  Password:string;


}