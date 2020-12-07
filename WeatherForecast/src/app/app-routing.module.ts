import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchcityComponent } from './searchcity/searchcity.component';
import { CityforecastComponent } from './cityforecast/cityforecast.component';

export const routes: Routes = [
  {
    path: '',
    component: SearchcityComponent, 
  },
      { path: 'cityForecast/:id', component: CityforecastComponent }
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
