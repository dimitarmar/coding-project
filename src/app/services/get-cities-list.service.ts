import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCitiesListService {

    constructor(private httpClient: HttpClient) { }

  getCities() {
      return this.httpClient.get('../../assets/city.list.json');
  }

}
