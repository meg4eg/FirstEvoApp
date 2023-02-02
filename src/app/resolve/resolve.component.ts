import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-resolve',
  templateUrl: './resolve.component.html',
  styleUrls: ['./resolve.component.css']
})
export class ResolveComponent implements OnInit {

  constructor(
      private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(
        post => this.post = post[0]
    )
    console.log(this.post)
  }

  public post: any;

}
