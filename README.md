# IQVIA
This particular project code demonstrates a weather app in which there are two panels, one ofr adding alist of cities and their
weather information, while other panel which shows up when one of the cities in the list of the first panel is clicked.
This page gives a 5 day forecast of the city name clicked.
The following requirements details can be found below which are covered in this project code:

1) Type a city name in the input then click + button to call weather endpoint to validate city name.
2) If the city name is valid it should be added to the list below under Recent Locations. If a city is invalid an error message should appear
and the city should not be added to the list.
3) Adding a new location should be added to the top of the list.
4) The cities in the Recent Locations list should show last temperature and the weather status (an Icon is a bonus).
5) Click on the Refresh button should update the weather reading at this particular location.
6) Click on X button should remove a location from the list.
7) Click on the list item should Call a forecast API and populate right panel according to the layout.
8) Click on the Clear button should remove all locations form the list.
9) Only 8 locations should be added, the ninth location should be pushed to the top of the list and the one on the bottom removed.
10) The right panel shows a detailed view of the weather with a 5 days forecast.
11) Click on the Refresh button should refresh weather forecast reading.

Steps to follow to see the demo:

>> npm install -g @angular/cli
 
>> ng new WeatherForecast

>> cd WeatherForecast

>> ng serve
