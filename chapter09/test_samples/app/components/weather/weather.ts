import {Component} from "angular2/core";
import {Control, NgFormControl} from "angular2/common";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import {WeatherService} from "../../services/weather/weather-service";

@Component({
    selector: "weather",
    directives: [NgFormControl],
    providers: [WeatherService],
    template: `<h2>Observable weather</h2>
<input type="text" placeholder="Enter city" [ngFormControl]="searchInput">
<h3>Showing weather for: {{city}}</h3>
<h4>{{temperature}}</h4>`
})
export class WeatherComponent {


    searchInput: Control;
    temperature: string;
    city: string;

    constructor(private weatherService: WeatherService) {
        this.searchInput = new Control("");
        this.searchInput.valueChanges
            .debounceTime(200)
            .switchMap(city => weatherService.getWeather(city))
            .subscribe(res => {
                if (res["cod"] === "404") return;
                if (!res.list[0]) {
                    this.temperature = "City not found";
                } else {
                    this.city = res.list[0].name;
                    this.temperature = `Current temprature is ${res.list[0].main.temp}F, humidity: ${res.list[0].main.humidity}%`;
                }
            },
            err => console.log(`Can't get weather. Error code: %s, URL: %s`, err.message, err.url),
            () => console.log(`Weather is retrieved`));
    }

}
