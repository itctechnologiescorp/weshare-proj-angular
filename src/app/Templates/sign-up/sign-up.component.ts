import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import { AuthService } from '../../Templates/auth/auth.service';
import {Router} from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

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
errorMsg: boolean = false;
emailIdExistMsg: boolean = false;

constructor(private frmbuilder: FormBuilder,
            private authService: AuthService,
            private router: Router,
            private cookieService: CookieService)  
 { 
  if(this.cookieService.get('token') !== '') {
    this.router.navigateByUrl('/notification');
  } else if(this.cookieService.get('selection') !== '') {
    this.router.navigateByUrl('/signUp');
  } else {
    this.router.navigateByUrl('/');
  }
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
    if(this.signupForm.invalid && !this.emailIdExistMsg){
       this.submitted = true;
    } else{
      
      this.submitted = true;
      this.authService.createUser(signupForm.value).subscribe((res: any) => {
        console.log('res', res)
        if (res.status === 200) {
          this.successMsg = true;
          this.authService.saveProfileKey(this.userId);
          this.router.navigate(['/profile-password'])
        } else {
          this.errorMsg = true;
        }
      });
      this.submitted = true;
    }
      
  }

  get f() { 
    return this.signupForm.controls; 
  }
  
  checkIfEmailIdExists(value: string) {
    const data = {email:value};
    this.authService.emailIdExists(data).subscribe((res: any) => {
      if(res.status === 200) {
        this.emailIdExistMsg = true;
      } else {
        this.emailIdExistMsg = false;
      }
    });
  }

  handleFileInput(event: any, field: string) {
     let reader = new FileReader();
     const [file] = event.target.files;
     reader.readAsDataURL(file);
      reader.onload = () => {
       if (field === 'idproof') {
        this.signupForm.value.Idproof = reader.result;
       } else {
        this.signupForm.value.RCBookCopy = reader.result;
       }
     };
  }

}
