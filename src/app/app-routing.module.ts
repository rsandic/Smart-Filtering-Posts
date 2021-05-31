import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from './components/posts/posts.component';
import {MainComponent} from './layouts/main/main.component';
import {PostDetailsComponent} from './components/post-details/post-details.component';

const routes: Routes = [
    {path: '', redirectTo: '/posts', pathMatch: 'full'},
    {
        path: 'posts',
        component: MainComponent,
        children: [
            { path: '', component: PostsComponent },
            {path: ':id', component: PostDetailsComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
