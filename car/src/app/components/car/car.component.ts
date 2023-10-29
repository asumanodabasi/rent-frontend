import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{
 
  
  cars:Car[]=[];
  cuurentCars:Car;
  dataLoaded=false;
  constructor(private carService:CarService ,private activatedRoutes:ActivatedRoute) {
     
  }

 ngOnInit(): void {
    this.activatedRoutes.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrandId(params["brandId"])
      }

      else if(params["colorId"]){
        this.getCarsByColorId(params["colorId"])
      }
      else{
        this.getCars();
      }
    })
  }
    getCars(){
      this.carService.getCars().subscribe(response=>{
        this.cars=response.data;
        this.dataLoaded=true;
      })
    }

    getCarsByBrandId(brandId:number){
      this.carService.getCarsByBrand(brandId).subscribe(response=>{
        this.cars=response.data
      })
    }

    getCarsByColorId(colorId:number){
      this.carService.getCarsByColor(colorId).subscribe(response=>{
        this.cars=response.data;
      })
    }

    setCurrentCar(car:Car){
      this.cuurentCars=car;
    }

    getCurrentCar(car:Car){
      if(this.cuurentCars==car){
        return "list-group-item active"
      }

      else{
        return "list-group-item"
      }
    }

    
}
