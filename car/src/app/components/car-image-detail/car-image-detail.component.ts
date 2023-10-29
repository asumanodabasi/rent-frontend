import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarImageDetailService } from 'src/app/services/car-image-detail.service';

@Component({
  selector: 'app-car-image-detail',
  templateUrl: './car-image-detail.component.html',
  styleUrls: ['./car-image-detail.component.css']
})
export class CarImageDetailComponent implements OnInit{

  carImages:CarImage[]=[]
  imageApi="https://localhost:44356/uploads/images/"
  
  ngOnInit(): void {
    this.avtivated.params.subscribe(params=>{
      if(params["carId"]){
        this.getImageByCar(params["carId"]);
      }
    })
  }

  
  constructor(private imageService:CarImageDetailService,private avtivated:ActivatedRoute) {
    
  }

  getImageByCar(carId:number){
    this.imageService.getImageByCar(carId).subscribe(response=>{
      this.carImages=response.data;
    })
  }

  getImagePath(carImage:CarImage){
    let newApi=this.imageApi+carImage.imagePath;
    return newApi;
  }


}
