import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
Username:string;
  constructor(public activaterout:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activaterout.params.subscribe(
      (params:Params)=>{
        debugger
        this.Username = params['Name'];
        
      }
    );
  }
  


}
