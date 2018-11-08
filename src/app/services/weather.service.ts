import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  API_ROOT_PATH = 'http://api.openweathermap.org/data/2.5/forecast';
  APIKEY = 'bdd43e8b85792b8fbf16ff173b5c901a';

  @Output() changeData: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient: HttpClient) { }

  getForecast (cityId)  {

      return this.httpClient
          .get<any>(this.API_ROOT_PATH + `?id=${cityId}&APPID=${this.APIKEY}`)
          .toPromise()
          .then(res => {
              this.changeData.emit(res);
          });
  }
}
