import {bootstrap} from 'angular2/platform/browser';
import {Component, ViewEncapsulation} from 'angular2/core';

@Component({
    selector: 'child',
    styles: ['.wrapper {background: lightgreen;}'],
    template: `
<div class="wrapper">
  <h2>Child</h2>
    <div>This &lt;div&gt; is defined in the child's template</div>
    <ng-content></ng-content>
</div>`,
    encapsulation: ViewEncapsulation.Emulated
})
class ChildComponent { }

@Component({
    selector: 'app',
    styles: ['.wrapper {background: cyan;}'],
    directives: [ChildComponent],
    template: `
<div class="wrapper">
  <h2>Parent</h2>
    <div>This &lt;div&gt; is defined in the parent's template</div>
  <child>
    <div>Parent projects this &lt;div&gt; onto the child</div>
  </child>
</div>`,

    encapsulation: ViewEncapsulation.Emulated
})
class AppComponent { }

bootstrap(AppComponent);