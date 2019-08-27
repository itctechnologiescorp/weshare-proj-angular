import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import { AuthService } from '../../Templates/auth/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

signupForm: FormGroup;
Key: number = 0;
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
userId: number; 

constructor(private frmbuilder: FormBuilder,
            private authService: AuthService,
            private router: Router)  
 {
    this.signupForm = frmbuilder.group({
      Key: new FormControl(100002),
      Region: new FormControl('IND'),
      Lang: new FormControl('EN'),  
      Name: new FormControl(null, Validators.required),
      isProvider: new FormControl('FALSE'),
      isCar: new FormControl('FALSE'),
      Gender: new FormControl('M'),
      EmailId: new FormControl(null, Validators.required),
      PhoneNo: new FormControl(null, Validators.required),
      Employer: new FormControl(null, Validators.required),
      Idproof: new FormControl(null, Validators.required),
      Addr1: new FormControl(null, Validators.required),
      Addr2: new FormControl(null),
      Country: new FormControl(null, Validators.required),
      State: new FormControl(null, Validators.required),
      City: new FormControl(null, Validators.required),
      Zip: new FormControl(null, Validators.required),
      isPetrol: new FormControl(null, Validators.required),
      Mileage: new FormControl(null, Validators.required),
      Make: new FormControl(null, Validators.required),
      Model: new FormControl(null, Validators.required),
      RegNo: new FormControl(null, Validators.required),
      RCBookCopy: new FormControl(null, Validators.required),
      vehicleDetails: new FormControl(null, Validators.required)
    });  
   }

  ngOnInit() { 
    this.authService.getLastUserId().subscribe((res: any)=>{
       if (res.status === 200) {
        const data = res.data;
        this.userId = Number(data) + 1;
        
      } else {
        this.userId = 100000;
      }
    })
    
  }


  PostData(signupForm) {
    this.signupForm.value.Key = this.userId;
    this.signupForm.value.Idproof = null;
    this.signupForm.value.RCBookCopy = null;
    if(this.signupForm.invalid){
      console.log('invalid')
      this.submitted = true;
    } else{
      console.log('form', signupForm.value);
      this.submitted = true;
      this.authService.createUser(signupForm.value).subscribe((res: any) => {
        console.log('res', res);
        if (res.status === 200) {
          this.successMsg = true;
          this.authService.saveProfileKey(this.userId);
          this.router.navigate(['/profile-password'])
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
