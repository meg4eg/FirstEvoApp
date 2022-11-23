import { Component } from '@angular/core';
import { Notify } from 'notiflix';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {

    constructor() {
    }

    notiflix_alert(type: string) {
        switch (type) {
            case 'success':
                Notify.success('Success Alert');
                break;
            case 'warning':
                Notify.warning('Warning Alert');
                break;
        }
    }

    ngOnInit(): void {
    }

}
