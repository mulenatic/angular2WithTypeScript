import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";
import "rxjs/add/operator/map";
import {WebSocketService} from "./websocket_observable_service";

@Component({
    selector: "http-client",
    providers: [WebSocketService],
    template: `<h1>Angular subscriber to WebSocket service</h1>
{{messageFromService}}<br>
<button (click)="sendMessageToServer()">Send msg to Server</button>
`})
class AppComponent {

    messageFromServer: string;

    constructor(private wsService: WebSocketService) {

        this.wsService.createObservableSocket("ws://localhost:8085")
            .subscribe(
            data => {
                this.messageFromServer = data;
            },
            err => console.log(err),
            () => console.log("The observable stream is complete")
            );

    }

    sendMessageToServer() {
        this.wsService.sendMessage("Hello from client");
    }

}

bootstrap(AppComponent);
