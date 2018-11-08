import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import data from '../data/city.list.json';

@Injectable({
  providedIn: 'root'
})
export class GetCitiesListService {

  constructor() { }

  getCities() {

    return data;
  }



}
