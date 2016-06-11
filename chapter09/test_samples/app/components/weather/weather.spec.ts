import {provide} from "angular2/core";
import {it, inject, beforeEach, beforeEachProviders, TestComponentBuilder, ComponentFixture} from "angular2/testing";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/empty";

import {WeatherComponent} from "./weather";
import {WeatherService} from "../../services/weather/weather-service";

class MockWeatherService {

    getWeather() {
        return Observable.empty();
    }
}

describe("WeatherComponent", () => {

    let component: WeatherComponent;
    let testComponentBuilder: TestComponentBuilder;

    beforeEachProviders(() => [
        TestComponentBuilder,
        WeatherComponent,
        provide(WeatherService, { useClass: MockWeatherService })
    ]);

    beforeEach(inject([TestComponentBuilder, WeatherComponent], (tcb, cmp) => {
        component = cmp;
        testComponentBuilder = tcb;
    }));

    it("should display the weather", done => {
        testComponentBuilder.createAsync(WeatherComponent).then((fixture: ComponentFixture) => {

            let element = fixture.nativeElement;
            let component: WeatherComponent = fixture.componentInstance;

            component.weather = { place: "New York", humidity: "44", temperature: "57" };

            fixture.detectChanges();

            expect(element.querySelector("h3").innerHTML).toBe("Current weather in New York:");
            expect(element.querySelector("li:nth-of-type(1)").innerHTML).toBe("Temparature: 57");
            expect(element.querySelector("li:nth-of-type(2)").innerHTML).toBe("Humidity: 44");
            done();
        });
    });

});
