import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {WeatherService} from '../services/weather.service';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  forecastData: any ;
  options: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
      this.weatherService.changeData.subscribe( data => {

       let arrayList: Array<any>;
       const minListTemp: Array<any> = [];
       const maxListTemp: Array<any> = [];

        //  console.log('data %o' , data);
        arrayList = data.list;

        arrayList.forEach((item: any) =>{
            minListTemp.push(item.main.temp_min);
            maxListTemp.push(item.main.temp_max);
        });

          this.forecastData = {
              labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
              datasets: [
                  {
                      label: 'Min temerature',
                      backgroundColor: '#42A5F5',
                      borderColor: '#1E88E5',
                      data: minListTemp
                  },
                  {
                      label: 'Max temperature',
                      backgroundColor: '#9CCC65',
                      borderColor: '#7CB342',
                      data: maxListTemp
                  }
              ]
          }


          this.options    = {
              title: {
                  display: true,
                  text: data.city.name + ' ' + data.city.country,
                  fontSize: 16
              },
              legend: {
                  position: 'bottom'
              }
          };
        //console.log('data %o' , this.forecastData);
      });
  }

}
