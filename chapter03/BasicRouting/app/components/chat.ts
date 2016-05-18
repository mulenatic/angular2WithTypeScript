import {Component} from 'angular2/core';

@Component({
    selector: 'chat',
    template: `<textarea placeholder="Chat with customer service" class="chat"></textarea>`,
    styles: [`.chat {background: #eee; height: 80px; width: 30%; font-size: 30px; float:leaf: display:block; box-sizing: border-box;}`]})
export class ChatComponent{}