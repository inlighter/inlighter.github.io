import { Component, OnInit } from '@angular/core';
import { NewsStorageService } from '../../shared/news-storage.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Article } from '../article.model';

@Component({
    template: `
    <div class="container">
        <div *ngIf="article?.title" class="well hoverwell thumbnail">
            <h1>{{ article?.title }}</h1>                
                <div class="info" *ngIf="article?.publishedAt || article?.author">{{ article?.publishedAt  | date  }} by {{ article?.author }}</div>        
                <p class="article-content" *ngIf="article?.text">{{ article?.text }}</p>
                <button class="btn btn-primary" (click)="delete()">Delete</button>
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
        
        `
    ]
})

export class CustomDetailsComponent implements OnInit {
    article: Article;
    title: string;
   
    constructor(private newsStorageService: NewsStorageService, private route: ActivatedRoute, 
    private router: Router) {

    }

    ngOnInit() {
        this.title = this.route.snapshot.params['title'];        
        this.article = this.newsStorageService.getCustomNews().find(news => news.title === this.title);
    }

    delete(): void {
        this.newsStorageService.removeCustomArticle(this.article);
        this.newsStorageService.removeArticle(this.article);
        this.router.navigate(['/custom']);
    }

}