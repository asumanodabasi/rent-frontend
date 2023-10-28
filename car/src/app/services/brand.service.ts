import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponeModel } from '../models/brandResponseModel';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) {
    
   }

   apiUrl="https://localhost:44356/api/brands/getAll";

   getBrands():Observable<BrandResponeModel>{
    return this.httpClient.get<BrandResponeModel>(this.apiUrl);
   }

}
