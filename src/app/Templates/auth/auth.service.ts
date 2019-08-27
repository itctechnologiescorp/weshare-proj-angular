import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from './user';

@Injectable()
export class AuthService {
    //url = 'http://localhost:3000/create';
    url = 'http://ec2-13-235-9-150.ap-south-1.compute.amazonaws.com:3000/';
    bSubject = new BehaviorSubject("a");

    constructor(private http: HttpClient) { }

    createUser(data: any) { 
        const httpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json');   
        const options = {
            headers: httpHeaders
        };        
        return this.http.post<any>(this.url+'profile/create', data, options);
    } 

    updateProfilePwd(data: any) { 
        const httpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json');   
        const options = {
            headers: httpHeaders
        };        
        return this.http.post<any>(this.url+'profile/updatePwd', data, options);
    } 
    
    getLastUserId() { 
        return this.http.get(this.url+'profile/getLastUserId');
    }
    
    saveProfileKey(data) {
       this.bSubject.next(data); 
    }

    login(userInfo: User){ console.log('user',userInfo)
        //localStorage.setItem('ACCESS_TOKEN', "access_token");
        const httpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json');   
        const options = {
            headers: httpHeaders
        };        
        return this.http.post<any>(this.url+'profile/login', userInfo, options);
      }
    
      public isLoggedIn(){
        return localStorage.getItem('ACCESS_TOKEN') !== null;
    
      }
    
      public logout(){
        localStorage.removeItem('ACCESS_TOKEN');
      }
    
      
} 