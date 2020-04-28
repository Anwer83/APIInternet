import { Component } from '@angular/core';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

   list:any=[];
  constructor(private service:RestapiService) {}
ngOnInit(){

  this.service.getuser().subscribe(data=>{
    this.list=data["results"];
  })
}
}
