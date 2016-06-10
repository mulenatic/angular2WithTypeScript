import {Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";

@Injectable()
export class WeatherService {


    private baseWeatherURL: string = "http://api.openweathermap.org/data/2.5/find?q=";
    private urlSuffix: string = "&unit=metric&appid=aac075973c83d20eb87cd1afff1df1c2";

    constructor(private http: Http) {

    }


    getWeather(city): Observable<Array<any>> {
        return this.http.get(this.baseWeatherURL + city + this.urlSuffix).map((res: Response) => res.json());
    }


}
