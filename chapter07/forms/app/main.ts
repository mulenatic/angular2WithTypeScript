import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";
import {FORM_DIRECTIVES, Control, ControlArray, ControlGroup} from "angular2/common";

@Component({
    selector: "app",
    directives: [FORM_DIRECTIVES],
    template: `
<form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
  <div>Username: <input type="text" ngControl="username"></div>
  <ul ngControlGroup="emails">
    <li *ngFor="#e of emails; #i = index">
      <input ngControl="{{i}}">
    </li>
  </ul>
  <button type="button" (click)="addEmail()">Add Email</button>
  <button type="submit">Register</button>
</form>
`
})
class AppComponent {

    emails: Control[] = [new Control()];
    form: ControlGroup = new ControlGroup({ emails: new ControlArray(this.emails) });

    addEmail() {
        const emails = <ControlArray>this.form.controls["emails"];
        emails.push(new Control());
    }

    onSubmit(formData) {
        console.log(formData);
    }
}

bootstrap(AppComponent);

