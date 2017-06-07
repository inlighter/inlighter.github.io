import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../article.model';

@Component({
    template: `
    <div class="container">
  <div *ngIf="article?.title" class="well hoverwell thumbnail">
      <h1>{{ article?.title }}</h1>
        <img *ngIf="article?.urlToImage" [src]="article?.urlToImage">
                
        <div class="info" *ngIf="article?.publishedAt || article?.author">{{ article?.publishedAt  | date  }} by {{ article?.author }}</div>
        <br>
        <p class="article-content" *ngIf="article?.description">{{ article?.description }} <span><a [href]="article.url" target="_blank">Read more</a></span></p>
    </div>
</div>
    `,
    styles: [
        `
        .article-content {
            font-size: 1.25em;
            line-height: 1.5em;
            margin-top: 1em;
        }
        .info {
            color: darkgray;
        }
        .thumbnail {
            padding: 30px;
            cursor: auto;
        }
        img {
            padding-bottom: 20px;
        }
        a {
            text-decoration: none;
        }
        `
    ]
})

export class TheNextWebDetailsComponent implements OnInit {
    article: Article;
    title: string;
   
    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.title = this.route.snapshot.params['title'];        
        this.article = this.route.snapshot.data['articles'].find(news => news.title === this.title);

        
    }

}