import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails:CarDetail[]=[];

  ngOnInit(): void {
    this.activated.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetail(params["carId"]);
      }
    })
  }

  
  constructor(private carDetailService:CarDetailService,private activated:ActivatedRoute) {
  }

  getCarDetail(carId:number){
    this.carDetailService.getCarDetail(carId).subscribe(response=>{
      this.carDetails=response.data
    })
  }
  
}
