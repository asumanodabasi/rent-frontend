import { Component, OnInit } from '@angular/core';


import { Color } from '../../models/color';
import { ColorService } from '../../services/color.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit{

  colors:Color[]=[];
  currentColors:Color | undefined;
  ngOnInit(): void {
    this.getColor();
  }

    
    constructor(private colorService:ColorService,activated:ActivatedRoute) {
    }

    getColor(){
      this.colorService.getColors().subscribe(response=>{
        this.colors=response.data;
      })
    }

    setCurrentColor(color:Color){
      this.currentColors=color;
    }

    getCurrentColor(color:Color){
      if(this.currentColors==color){
        return "list-group-item active"
      }

      else{
        return "list-group-item"
      }
    }

    getAllColor(){
      if(!this.currentColors){
        return "list-group-item active"
      }

      else{
        return "list-group-item"
      }

    }
  }
