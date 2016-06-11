import {Component} from "angular2/core";
import {Control, NgFormControl} from "angular2/common";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import {WeatherService, WeatherResult} from "../../services/weather/weather-service";

@Component({
    selector: "weather",
    directives: [NgFormControl],
    providers: [WeatherService],
    template: `<h2>Observable weather</h2>
<input type="text" placeholder="Enter city" [ngFormControl]="searchInput">
<h3>Showing weather for: {{weather?.place}}</h3>
<p>The tempearture is: {{weather?.temperature}}</p>
<p>The humidity is: {{weather?.humidity}}</p>`
})
export class WeatherComponent {


    searchInput: Control;
    weather: WeatherResult;

    constructor(private weatherService: WeatherService) {
        this.searchInput = new Control("");
        this.searchInput.valueChanges
            .debounceTime(200)
            .switchMap(city => weatherService.getWeather(city))
            .subscribe((res: WeatherResult) => {
                this.weather = res;
            },
            err => console.log(`Can't get wather. Error code %s, URL: %s`, err.message, err.url),
            () => console.log(`Weather is retrieved`));
    }

}
