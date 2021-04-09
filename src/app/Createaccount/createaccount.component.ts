import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import{NPIService} from './createccount.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {
  hide = true;
  Customerform: FormGroup;
  isDisabled:boolean=true;
  NPIvalidation:string="";
  IsNPIvalid:boolean=false;
  Isvalid:boolean;
  NPIResponse:string;
  errorMessage:string;
  User:string;
  constructor(private formBuilder: FormBuilder,public NPIService:NPIService,public router: Router) {

   }

  ngOnInit(): void {
    this.Customerform = this.formBuilder.group(this.initForm());
    this.Customerform.controls['NPInumber'].disable();
  }
  Next(){
if(this.Customerform.value.Selectedcountry!=""&&this.Customerform.value.Accounttype!=""){
    if(this.Customerform.value.Countryselect=="US"){
      if(this.NPIResponse==this.Customerform.value.NPInumber){
if(this.User=="Client" ){
this.router.navigate(['/clientprofile']);
} 
else if(this.User=="Provider")   {
  this.router.navigate(['/provider']);
}

}
    }
    else if(this.Customerform.value.Countryselect=="Others"){
      if(this.User=="Client" ){
        this.router.navigate(['/clientprofile']);
        } 
        else if(this.User=="Provider")   {
          this.router.navigate(['/provider']);
        }
    }
    else{
      this.IsNPIvalid=true;
      this.NPIvalidation="Invalid NPI number";
    }

}
  }

  getNRIDetails() {
    debugger
    this.NPIService.getNPIdetails(this.Customerform.controls["NPInumber"].value)
      .subscribe((data: any) => {
        this.NPIResponse = data.results[0].number;
            if(this.Customerform.value.NPInumber==this.NPIResponse){
              this.NPIvalidation="";
            }
            else{
              this.IsNPIvalid=true;
              this.NPIvalidation="Invalid NPI number";
            }
      }, error => this.errorMessage = <any>error);
  }

  validateNPI(){
    if(this.Customerform.controls["NPInumber"].value!=""){
    
      this.getNRIDetails();
      this.NPIvalidation="";
    }
    else{
  }

  }
  
  Selectedcountry(data){
    debugger
     if(data.value=="US"){
       this.Customerform.controls['NPInumber'].enable();
       this.isDisabled=false;
     }
     else{
      this.Customerform.controls['NPInumber'].disable();
      this.isDisabled=true;
     }
  }

  Usertype(data){
    this.User=data.value;

  }
  initForm(): any {
    let aFormElements: any = (
      ({

        Countryselect: ['',
          {
            validators: [
              Validators.required,
              Validators.minLength(0),
              Validators.maxLength(25),
            ],
          
          }],
          Accounttype: ['',
          {
            validators: [
              Validators.required,
              Validators.minLength(0),
              Validators.maxLength(24),
              
                 
            ],
           
          }],
          NPInumber: [''],
        

      }));
    return aFormElements;
  }
}
