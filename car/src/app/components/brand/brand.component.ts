import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand';
import { BrandService } from '../../services/brand.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
  currentBrands:Brand | undefined;
  dataLoaded=false;
  constructor(private brandService:BrandService,private activated:ActivatedRoute) {
    
    
  }
  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data;
      this.dataLoaded=true;
    })
  }


    setCurrentBrand(brand:Brand){
      this.currentBrands=brand
    }

    getCurrentBrandClass(brand:Brand){
      if(this.currentBrands==brand){
        return "list-group-item active"
      }
      else{
        return "list-group-item"
      }

    }

    getAllBrandClass(){
      if(!this.currentBrands){
        return "list-group-item active"
      }

      else{
        return "list-group-item"
      }
    }
}
