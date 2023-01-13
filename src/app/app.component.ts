import { Component } from '@angular/core';
import { ResponseService } from './response.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    constructor(public responseService: ResponseService) {
    }
    public title = 'Hello';
}
