import {Injectable} from '@angular/core';
import {Post} from '../models';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    private posts: Post[];

    constructor(private http: HttpClient) {
    }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts', {});
    }

    addPost(postObj: Post): Observable<any> {
        return this.http.post<any>('https://jsonplaceholder.typicode.com/posts/', JSON.stringify(postObj));
    }

    deletePost(id: number): Observable<any> {
        return this.http.delete<any>(`https://jsonplaceholder.typicode.com/posts/${id}`, {});
    }

    getSinglePost(id: number): Observable<any> {
        return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${id}`, {});
    }
    getSinglePostComments(id: number): Observable<any> {
        return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {});
    }

}
