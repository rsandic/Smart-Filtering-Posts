import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/post.model';
import {PostsService} from '../../services/posts.service';
import {Filter} from '../../models';
import {element} from 'protractor';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../services/alert.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
    posts: Post[] = [];
    uniqueUserIds: number[];
    filters = new Filter(5, null, null);
    newPostFormVisible = false;
    newPostForm: FormGroup;
    clickedFormSubmit = false;

    constructor(private postsService: PostsService,
                private fb: FormBuilder,
                private alertService: AlertService
    ) {
    }

    ngOnInit(): void {
        this.postsService.getPosts().subscribe(
            (data: Post[]) => {
                this.posts = data;

                const arrayOfUserIds = this.posts.map((elem) => {
                    return elem.userId;
                });
                this.uniqueUserIds = [...new Set(arrayOfUserIds)];
            },
            error => {

            }
        );

        this.newPostForm = this.fb.group({
            id: null,
            userId: 1,
            title: [null, Validators.required],
            body: [null, Validators.required]
        });
    }

    listenFilters(filtersValue: Filter): void {
        this.filters = filtersValue;
    }

    deletePost(id: number): void {
        const index = this.posts.findIndex((p) => {
            return p.id === id;
        });
        this.posts.splice(index, 1);
    }

    toggleNewPostFormVisibility(): void {
        this.newPostFormVisible = !this.newPostFormVisible;
    }

    addNewPost(): void {
        this.clickedFormSubmit = true;

        if (this.newPostForm.valid) {
            this.postsService.addPost(this.newPostForm.value).subscribe(
                (response) => {
                    this.newPostForm.patchValue({id: response.id});
                    this.posts.unshift(this.newPostForm.value);
                    this.newPostFormVisible = false;
                    this.clickedFormSubmit = false;
                    this.newPostForm.reset();
                    this.alertService.success('New Post added');
                },
                (error) => {
                    this.alertService.success('Problem with adding a new post');
                }
            );
        }
    }


}
