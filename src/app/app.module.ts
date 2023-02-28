import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GetTodosService } from './get-todos.service';
import { AddIdInterceptor } from './add-id.interceptor';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [GetTodosService, {
        provide: HTTP_INTERCEPTORS,
        useClass: AddIdInterceptor,
        multi: true,
    }],
    bootstrap: [AppComponent],
})
export class AppModule {
}
