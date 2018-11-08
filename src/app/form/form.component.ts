import { Component, OnInit } from '@angular/core';
import {GetCitiesListService} from '../services/get-cities-list.service';
import {forEach} from '@angular/router/src/utils/collection';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  data: Array<any>;
  selectedCity = '';

  constructor(private getCitiesListService: GetCitiesListService ,
              private weatherService: WeatherService) { }

  ngOnInit() {
      this.data = this.getCitiesListService.getCities();
      console.log ('%o', this.data);
  }

  checkIfCityExist() {
      let cityItem: any;

      let i = 0;
      while (this.data[i]) {
          if (this.data[i].name === this.selectedCity) {
              cityItem = this.data[i];
              break;
          }
          i++ ;
      }

      if (cityItem) {
          this.weatherService.getForecast(cityItem.id);
      } else {
          alert('There is no city with the written name.\n' +
              'Please correct the name of the city');
      }


  }



}
