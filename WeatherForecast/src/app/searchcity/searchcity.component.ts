import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weatherservice.service';
import { Router } from '@angular/router';
import { LocalStorageModule } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-searchcity',
  templateUrl: './searchcity.component.html',
  styleUrls: ['./searchcity.component.sass']
})
export class SearchcityComponent implements OnInit {
  weather: any;
  city: any;
  cityName: any;
  weathertype: any;
  cityWeatherData: any = [];
  showError: boolean = false;


  constructor(private weatherService: WeatherService, private router:Router, private localStorage: LocalStorageModule) { }

  ngOnInit(): void {
  }

  //get city weather data using the API
  // converting kelvin temperature to Celcius
  //check for the location 
  
  getCity(city: string) {
    this.weatherService.getWeatherByCityName(city).subscribe(data => {
      this.weather = data;
      if(city.toLowerCase == this.weather.name.toLowerCase) {
        if(this.cityWeatherData.length >= 8) { // if the list contains more than 8 cities, 
          //the 9th city added is inserted at top and 1st city added is removed
          this.weather.main.temp = ~~(this.weather.main.temp - 273.15);
          this.cityWeatherData.pop();
          this.cityWeatherData.unshift(this.weather);
          city = ''
        }
        else {
          this.weather.main.temp = ~~(this.weather.main.temp - 273.15);
          this.cityWeatherData.unshift(this.weather);
          city = ''
        }
        // console.log('weather data array', this.cityWeatherData);
        // console.log('weather data', this.weather);
        
      }
      
    }, err => { // show error message if location does not exist
      this.showError = true;
      city = '';
    })
    
  }

  //click on refresh icon updates the temperature and weather
  refreshCity(cityName: string) {
    // console.log('city name', cityName)
    this.weatherService.getWeatherByCityName(cityName).subscribe(data => {
      for(let i=0;i<=this.cityWeatherData.length;i++) {
        if(cityName == this.cityWeatherData[i].name) {
          // console.log('city weather data before',this.cityWeatherData[i])
          this.cityWeatherData[i] = data;
          this.cityWeatherData[i].main.temp = ~~(this.cityWeatherData[i].main.temp - 273.15);
          // this.weathertype = this.cityWeatherData[i].weather.main
          // console.log('city weather data after',this.cityWeatherData[i])
        }
      }
    })
  }

  //removes city from the list
  removeCity(cityName: any) {
    for(let i=0;i<this.cityWeatherData.length;i++) {
      if(cityName == this.cityWeatherData[i].name) {
        this.cityWeatherData.splice(i, 1)
      }
    }
  }

  //click on the clear button removes all the cities listed
  emptyCities() {
    this.cityWeatherData = [];
  }

  routeToWeatherForecast(cityData: any) {
    console.log('data', this.router.navigateByUrl('cityForecast', { state: cityData }))
    // this.router.navigateByUrl('cityForecast', { state: cityData });
    this.router.navigate(['cityForecast/' + cityData.id]);

  }

}
