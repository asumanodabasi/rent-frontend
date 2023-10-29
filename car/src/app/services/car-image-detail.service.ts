import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';

@Injectable({
  providedIn: 'root'
})
export class CarImageDetailService {
  apiUrl="https://localhost:44356/api/"
  constructor(private httpClient:HttpClient) { }

  getImageByCar(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPathApi=this.apiUrl+"car/getimage?carId="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPathApi)
  }
}
