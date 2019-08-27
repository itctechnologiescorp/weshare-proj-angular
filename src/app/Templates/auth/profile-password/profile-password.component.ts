import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-profile-password',
  templateUrl: './profile-password.component.html',
  styleUrls: ['./profile-password.component.scss']
})
export class ProfilePasswordComponent implements OnInit {

profilePwdForm: FormGroup;
SecretQ1: string = '';
SecretAns: string = '';
PWD: string = '';
profileKey: number;

constructor(private frmbuilder: FormBuilder,
            private authService: AuthService)  
 {
    this.profilePwdForm = frmbuilder.group({
      SecretQ1: new FormControl(''),
      SecretAns: new FormControl(''),
      PWD: new FormControl(''),  
      
    });  
   }

  ngOnInit() { 
    this.authService.bSubject.subscribe((res: any) => {
      this.profileKey = res;
    });
  }

  submit(profilePwdForm) { 
    profilePwdForm.value.Key = this.profileKey;
    this.authService.updateProfilePwd(profilePwdForm.value).subscribe((res: any) => {
      console.log('res', res);
      
    });
  }

}
