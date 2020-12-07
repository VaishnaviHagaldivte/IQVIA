import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weatherservice.service';

@Component({
  selector: 'app-cityforecast',
  templateUrl: './cityforecast.component.html',
  styleUrls: ['./cityforecast.component.sass']
})
export class CityforecastComponent implements OnInit {
  cityName: any;
  forecast: any;
  currentWeather: any;
  currTemp: any;
  wind: any;
  pressure: any;
  weatherForecastData: any = [];
  refreshCityName: any;

  constructor(private route: ActivatedRoute, private weatherService: WeatherService) { }

  //on init based on the city id fetched from the params extract the forecast data
  ngOnInit(): void {
    let id = +this.route.snapshot.params.id;
    console.log('id', id);

    this.weatherService.getWeatherForecastByCityId(id).subscribe(data => {
      this.forecast = data;
      console.log('forecast data', this.forecast);
      this.cityName = this.forecast.city.name;
      this.currentWeather = this.forecast.list[0].weather[0].main;
      this.currTemp = ~~(this.forecast.list[0].main.temp - 273.15)+" C";
      this.wind = this.forecast.list[0].wind.speed + "ms" + " " + this.forecast.list[0].wind.deg + "deg";
      this.pressure = this.forecast.list[0].main.pressure;
      this.weatherForecastData = [];
      for(let i=0;this.weatherForecastData.length<5;i+=8) {
          var obj = {
            dateInfo: this.forecast.list[i].dt_txt,
            temp: ~~(this.forecast.list[i].main.temp - 273.15) + " C",
            forecast: this.forecast.list[i].weather[0].main
          }
          this.weatherForecastData.push(obj) 
      }
      // console.log('weather forecast array', this.weatherForecastData)
    }, 
    )
  }

  refreshCity(refreshCityName: any){
    this.ngOnInit();
  }

  // function to get date
  getDD(Dd: any) {
    Dd = Dd.substring(0, 10).split("-");
    return Dd[2]
  }

  //get day function
  getDay(day: any) {
    day = new Date(day).getDay();
    console.log('day', day)
    switch(day) {
      case 0:
      day = "Sun";
      break;
    case 1:
      day = "Mon";
      break;
    case 2:
      day = "Tue";
      break;
    case 3:
      day = "Wed";
      break;
    case 4:
      day = "Thu";
      break;
    case 5:
      day = "Fri";
      break;
    case 6:
      day = "Sat";

    }
    return day
  }

}
