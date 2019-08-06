import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms';
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

constructor(private frmbuilder: FormBuilder,
            private authService: AuthService)  
 {
    this.signupForm = frmbuilder.group({
      Key: new FormControl('100001'),
      Region: new FormControl('IND'),
      Lang: new FormControl('EN'),  
      Name: new FormControl(),
      isProvider: new FormControl('FALSE'),
      isCar: new FormControl('FALSE'),
      Gender: new FormControl('M'),
      EmailId: new FormControl(),
      PhoneNo: new FormControl(),
      Employer: new FormControl(),
      Idproof: new FormControl(),
      Addr1: new FormControl(),
      Addr2: new FormControl(),
      Country: new FormControl(),
      State: new FormControl(),
      City: new FormControl(),
      Zip: new FormControl(),
      isPetrol: new FormControl('FALSE'),
      Mileage: new FormControl(),
      Make: new FormControl(),
      Model: new FormControl(),
      RegNo: new FormControl(),
      RCBookCopy: new FormControl()
    });  
   }

  ngOnInit() {
  }
  PostData(signupForm) {
    console.log('form', signupForm.value);
    this.authService.createUser(signupForm.value).subscribe((res: any)=>{
      console.log('res', res);
    });
  }
}
