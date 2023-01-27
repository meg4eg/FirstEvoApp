import { Component } from '@angular/core';
import { interval, map, Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {

    constructor() {
    }

    public numbers: Array<number> = [];
    public numbersInterval$!: Subscription;
    public randomInterval$!: Subscription;
    public randoms: Array<string> = [];

    public start() {
        const intervalStream = interval(2000);
        this.numbersInterval$ = intervalStream.subscribe(value => this.numbers.push(value));

        this.randomInterval$ = intervalStream.pipe(
            map(() => `Random value: ${Math.floor(Math.random() * 101)}`),
        )
            .subscribe(
                value => this.randoms.push(value)
            );

    }

    public stop() {
        this.numbersInterval$.unsubscribe();
        this.randomInterval$.unsubscribe();
    }
}
