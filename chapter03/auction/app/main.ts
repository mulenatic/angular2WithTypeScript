import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import ApplicationComponent from './components/application/application';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

bootstrap(ApplicationComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);