import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PostsComponent} from './components/posts/posts.component';
import {AppRoutingModule} from './app-routing.module';
import {MainComponent} from './layouts/main/main.component';
import {PostListComponent} from './components/post-list/post-list.component';
import {PostListItemComponent} from './components/post-list-item/post-list-item.component';
import {HttpClientModule} from '@angular/common/http';
import { FiltersComponent } from './components/filters/filters.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ArrayFilterPipe} from './pipes/array-fillter.pipe';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
    declarations: [
        AppComponent,
        PostsComponent,
        MainComponent,
        PostListComponent,
        PostListItemComponent,
        FiltersComponent,
        ArrayFilterPipe,
        PostDetailsComponent,
        AlertComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
