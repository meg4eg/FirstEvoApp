import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    public title = 'Hello';
    public date = new Date();
    public names = [
        {
            name: 'Борис',
        },
        {
            name: 'Владимир',
        },
        {
            name: 'Дмитрий',
        },
        {
            name: 'Владимир',
        },
        {
            name: 'Владимир',
        },
    ];
}
