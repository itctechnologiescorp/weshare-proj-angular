import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import { AuthService } from '../../Templates/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

signupForm: FormGroup;
Key: number = 100001;
Region: string = 'IND';
Lang: string = 'EN';
Name: string = '';
isProvider: boolean = false;
isCar: boolean = false;
Gender: string = 'M';
EmailId: string = ''; 
PhoneNo: string = ''; 
Employer: string = '';   
Idproof: string = ''; 
Addr1: string = ''; 
Addr2: string = ''; 
Country: string = ''; 
State: string = ''; 
City: string = '';
Zip: string = '';
isPetrol: string = ''; 
Mileage: string = ''; 
Make: string = '';   
Model: string = ''; 
RegNo: string = ''; 
RCBookCopy: string = '';
successMsg: boolean;
submitted = false; 

constructor(private frmbuilder: FormBuilder,
            private authService: AuthService)  
 {
    this.signupForm = frmbuilder.group({
      Key: new FormControl(100002),
      Region: new FormControl('IND'),
      Lang: new FormControl('EN'),  
      Name: new FormControl('', Validators.required),
      isProvider: new FormControl('FALSE'),
      isCar: new FormControl('FALSE'),
      Gender: new FormControl('M'),
      EmailId: new FormControl('', Validators.required),
      PhoneNo: new FormControl('', Validators.required),
      Employer: new FormControl('', Validators.required),
      Idproof: new FormControl('', Validators.required),
      Addr1: new FormControl('', Validators.required),
      Addr2: new FormControl(),
      Country: new FormControl('', Validators.required),
      State: new FormControl('', Validators.required),
      City: new FormControl('', Validators.required),
      Zip: new FormControl('', Validators.required),
      isPetrol: new FormControl('', Validators.required),
      Mileage: new FormControl('', Validators.required),
      Make: new FormControl('', Validators.required),
      Model: new FormControl('', Validators.required),
      RegNo: new FormControl('', Validators.required),
      RCBookCopy: new FormControl('', Validators.required),
      vehicleDetails: new FormControl('', Validators.required)
    });  
   }

  ngOnInit() {
  }


  PostData(signupForm) {
    if(this.signupForm.invalid){
      console.log('invalid')
      this.submitted = true;
    } else{
      console.log('form', signupForm.value);
      this.submitted = true;
      this.authService.createUser(signupForm.value).subscribe((res: any) => {
        if (res.status === 200) {
          this.successMsg = true;
        } else {
          this.successMsg = false;
        }
      });
      this.submitted = true;
    }
      
  }

  get f() { 
    return this.signupForm.controls; 
  }
  
}
