import {bootstrap} from "angular2/platform/browser";
import {Component, provide} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from "angular2/router";

import {HomeComponent} from "./home/home";
import {WeatherComponent} from "./weather/weather";

@Component({
    selector: "app",
    template: `<h1>Get Weather</h1>
    <div><a [routerLink]="['/Home']">Home</a>
<a [routerLink]="['/Weather']">Weather</a>
<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: "/", component: HomeComponent, as: "Home" },
    { path: "/weather", component: WeatherComponent, as: "Weather" }
])
class AppComponent {
}

bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: "/" }), HTTP_PROVIDERS]);
