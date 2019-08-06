import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable()
export class AuthService {
    url = 'http://localhost:3000/create';
    constructor(private http: HttpClient) { }

    createUser(data: any) { console.log('data', data);
        const httpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json');   
        const options = {
            headers: httpHeaders
        };        
        return this.http.post<any>(this.url, data, options);
    }    
      
} 