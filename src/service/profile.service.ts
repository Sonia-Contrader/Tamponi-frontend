import { UserDTO } from './../dto/userdto';
import { HttpClient } from '@angular/common/http';
import { ProfileDTO } from 'src/dto/profilodto'; 
import { Injectable } from "@angular/core";
import { AbstractService } from "./abstractservice";
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';


@Injectable({
    providedIn: 'root'
  })

export class ProfileService extends AbstractService<ProfileDTO>{
    
    constructor(http: HttpClient){
        super(http);
        this.type = "micro1";
    }

    
}