import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../models';
import {PostsService} from '../../services';
import {AlertService} from '../../services/alert.service';

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
    post: Post;
    postComments: any[];

    constructor(private activatedRoute: ActivatedRoute,
                private postsService: PostsService,
                private alertService: AlertService
    ) {
        this.activatedRoute.params.subscribe((params) => {
            const id = params.id;
            this.getPost(id);
        });
    }

    ngOnInit(): void {
    }

    getPost(id): void {
        this.postsService.getSinglePost(id).subscribe(
            (data: Post) => {
                this.post = data;
                this.getPostComments(id);
            },
            error => {
                this.alertService.error('Problem with post loading');
            }
        );
    }

    getPostComments(id): void {
        this.postsService.getSinglePostComments(id).subscribe(
            data => {
                this.postComments = data;
            },
            error => {
                this.alertService.error('Problem with post comments loading');
            }
        );
    }

}
