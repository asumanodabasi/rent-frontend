import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit{

  colors:Color[]=[];
  currentColors:Color;
  ngOnInit(): void {
    this.getColors();
  }

    
    constructor(private colorService:ColorService) {
    }

    getColors(){
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
