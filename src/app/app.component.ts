import { Component, ComponentRef, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicsComponent } from './dynamics/dynamics.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent {

    @ViewChild('dynamicTable', { read: ViewContainerRef })
    private viewRef!: ViewContainerRef;
    private componentRef!: ComponentRef<DynamicsComponent>

    constructor() {
    }

    addComp() {
        this.viewRef.clear();
        this.componentRef = this.viewRef.createComponent(DynamicsComponent);
    }
    delComp() {
        this.viewRef.clear();
    }

}
