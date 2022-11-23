import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-inline',
    templateUrl: './inline.component.html',
    styleUrls: ['./inline.component.css'],
})
export class InlineComponent implements OnInit {

    constructor(
        private meta: Meta,
    ) {
        this.meta.addTags([
            { property: 'og:title', content: 'The Rock' },
            { property: 'og:type', content: 'video.movie' },
            { property: 'og:url', content: '//www.imdb.com/title/tt0117500/' },
        ]);
    }

    title: HTMLMetaElement | null = null;
    type: HTMLMetaElement | null = null;
    url: HTMLMetaElement | null = null;

    ngOnInit(): void {
        this.title = this.meta.getTag('property="og:title"')
        this.type = this.meta.getTag('property="og:type"')
        this.url = this.meta.getTag('property="og:url"')
    }

}
