import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable(
  {
  providedIn: 'root'
}
)
export class WeatherService {

  appUrl = "https://api.openweathermap.org/data/2.5/weather";
  forecastUrl = "https://api.openweathermap.org/data/2.5/forecast";
  appId = "c51223c219d6aec8cb8c5210449bd859";

  constructor(private http: HttpClient) { }

  //get weather data by city name
  getWeatherByCityName(city: string) {
    let params = new HttpParams().set('q', city).set('appid', this.appId)
    return this.http.get(this.appUrl, { params });
  }

   //get weather forecast data by city name
   getWeatherForecastByCityId(cityId: any) {
    let params = new HttpParams().set('id', cityId).set('appid', this.appId)
    return this.http.get(this.forecastUrl, { params });
  }

}
