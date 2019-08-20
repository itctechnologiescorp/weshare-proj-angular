import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable()
export class AuthService {
    //url = 'http://localhost:3000/create';
    url = 'http://ec2-13-235-9-150.ap-south-1.compute.amazonaws.com:3000/';
    constructor(private http: HttpClient) { }

    createUser(data: any) { console.log('data', data);
        const httpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json');   
        const options = {
            headers: httpHeaders
        };        
        return this.http.post<any>(this.url+'profile/create', data, options);
    } 
    
    getLastUserId() { 
        return this.http.get(this.url+'profile/getLastUserId');
    } 
      
} 