import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from '../IProperty.interface';
import { PropertyService } from '../service/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
properties!:Array<IProperty>;
SellRent:number=1;
  constructor(private route:ActivatedRoute, private service:PropertyService) { }

  ngOnInit(): void {

    if(this.route.snapshot.url.toString()){
      this.SellRent=2;
    }
    this.service.getAllProperties(this.SellRent).subscribe(
      data=>{
        this.properties=data;
        console.log(this.route.snapshot.url.toString());
      },
      error=>{
      console.log(error);
    }
      
    );
  }
  
}
