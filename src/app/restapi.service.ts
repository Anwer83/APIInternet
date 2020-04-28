import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
public url='https://randomuser.me/api/?results=10';
  constructor(private httpclient:HttpClient) { }
  getuser(){
      return this.httpclient.get(this.url);

  }

}
