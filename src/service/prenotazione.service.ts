import { PrenotazioneDTO } from './../dto/prenotazionedto';
import { UserDTO } from './../dto/userdto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { AbstractService } from "./abstractservice";
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';


@Injectable({
    providedIn: 'root'
  })

export class PrenotazioneService extends AbstractService<PrenotazioneDTO>{
    
    constructor(http: HttpClient){
        super(http);
        this.type = "micro1";
    }

    
}