import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IProperty } from '../IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) { }
  getAllProperties() {
    return this.http.get('data/properties.json').pipe(
      map((data:any) => {
        
        const propertiesArray: Array<IProperty> = [];
        for (const Id in data) {
         console.log(data[Id]);
          if (data.hasOwnProperty(Id))
          {
            propertiesArray.push(data[Id]);
            //console.log(propertiesArray);
          }
        }     
         return propertiesArray; 

      })
    );

  }
}
