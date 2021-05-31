import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ElementRef} from '@angular/core';
import {Filter} from '../../models';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
    @Input() uniqueUserIds: number[];
    @Output() onFiltersChange: EventEmitter<Filter> = new EventEmitter<Filter>();

    @ViewChild('numberOfDisplayPosts', {static: false}) numberOfDisplayPostsRef: ElementRef;
    @ViewChild('querySearch', {static: false}) querySearchRef: ElementRef;

    userIdPostFilter: number = null;

    constructor() {
    }

    ngOnInit(): void {

    }

    uniqueUserIdClick(userId): void {
        if (this.userIdPostFilter === userId) {
            this.userIdPostFilter = null;
        } else {
            this.userIdPostFilter = userId;
        }
        this.filterChange();
    }

    filterChange(): void {
        this.onFiltersChange.emit({
            numberOfPostToShow: this.numberOfDisplayPostsRef.nativeElement.value,
            querySearch: this.querySearchRef.nativeElement.value,
            userId: this.userIdPostFilter
        });
    }

}
