import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class HttpService {

    constructor(
        private http: HttpClient,
    ) {
    }

    public getPosts() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts/1')
    }
    public send(num: number) {
        switch (num) {
            case 1:
                this.http.get('https://jsonplaceholder.typicode.com/posts')
                    .subscribe(
                        data => console.log('posts - get', data),
                    );
                break;
            case 2:
                this.http.get('https://jsonplaceholder.typicode.com/comments',
                    { params: { postId: 1 } })
                    .subscribe(data => console.log('comments, postId=1', data));
                break;
            case 3:
                this.http.post('https://jsonplaceholder.typicode.com/posts',
                    {})
                    .subscribe(data => console.log('posts - post', data));
                break;
            case 4:
                this.http.get('https://jsonplaceholder.typicode.com/post')
                    .subscribe({
                        next: (data) => console.log('post - getError', data),
                        error: (error: HttpErrorResponse) => console.log('error', error),
                    });
                break;
            case 5:
                this.http.get('https://jsonplaceholder.typicode.com/posts',
                    {
                        responseType: 'text',
                        headers: { 'X-test': '1' }
                    })
                    .subscribe(
                        (data) => console.log('posts - post', data),
                    );
                break;
            case 6:
                this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
                    .subscribe(
                        data => console.log('delete', data),
                    );
                break;
        }
    }
}
