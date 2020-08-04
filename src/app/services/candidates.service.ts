import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , of} from 'rxjs';
import { Candidate } from "../models/candidate-model";

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  constructor(private httpclient:HttpClient) { }


  public getCandidates():Observable<Candidate[]>{
    return this.httpclient.get<Candidate[]>('http://localhost:4200/assets/candidates.js');
  }

}
