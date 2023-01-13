import { Component } from '@angular/core';

interface Book {
    name: string;
    author: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    public title = 'Hello';
    public book = {
        name: '',
        author: '',
    };

    public books: Book[] = [
        {
            author: 'Me',
            name: '1 book',
        },
        {
            author: 'You',
            name: '2 book',
        },
    ];

    public addBook() {
        this.books.push({
            name: this.book.name,
            author: this.book.author,
        });
    }
}
