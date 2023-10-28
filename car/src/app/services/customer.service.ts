import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerResponseModel } from '../models/customerResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
apiUrl="https://localhost:44356/api/customers/getAll"
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<CustomerResponseModel>{
   return this.httpClient.get<CustomerResponseModel>(this.apiUrl)
  }
}
