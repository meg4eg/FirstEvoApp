import { Component, OnInit } from '@angular/core';
import { GetTodosService } from './get-todos.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

interface todo  {
    id: number,
    completed: boolean,
    title: string,
    userId: number,
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

    constructor(
        private getTodoService: GetTodosService,
        private http: HttpClient) {
    }

    public todos: todo[] = [];

    ngOnInit() {
        this.getTodoService.getTodos().subscribe({
            next: (response: any) => {
                this.todos = response;
                console.log(this.todos);
            },
            error: (err: HttpErrorResponse) => {
                console.log(err);
            },
        });
    }
}
