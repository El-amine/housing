import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProperty } from '../IProperty.interface';
import { PropertyService } from '../service/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
properties!:Array<IProperty>;
  constructor(private service:PropertyService) { }

  ngOnInit(): void {
    this.service.getAllProperties().subscribe(
      data=>{
        this.properties=data;
      },
      error=>{
      console.log(error);
    }
      
    );
  }
  
}
