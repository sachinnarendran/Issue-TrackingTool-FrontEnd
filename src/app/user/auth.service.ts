import {Injectable} from '@angular/core';
import { AppService } from '../app.service';
import { map }  from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})

export class AuthService
{
    constructor(private apiService:AppService,private cookieService:CookieService){}
    
    signup(data:any)
    {
        
        return this.apiService.post("users/register",JSON.stringify(data));
    }
    login(data:any)
    {
        return this.apiService.post("users/login",JSON.stringify(data));
    } 
}