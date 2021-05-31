import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Post} from '../../models';
import {PostsService} from '../../services';
import {AlertService} from '../../services/alert.service';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
    @Input() post: Post;
    @Output() deleteEmit: EventEmitter<any> = new EventEmitter();

    constructor(private postsService: PostsService,
                private alertService: AlertService) {
    }

    ngOnInit(): void {
    }

    deletePost(): void {
        this.postsService.deletePost(this.post.id).subscribe(() => {
            this.alertService.success('Post deleted');
            this.deleteEmit.next(this.post.id);
        }, error => {
            this.alertService.error('Problem with post delete');
        });
    }

}
