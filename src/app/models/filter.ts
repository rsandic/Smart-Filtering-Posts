export class Filter {
    numberOfPostToShow: number;
    querySearch: string;
    userId: number;

    constructor(numberOfPostToShow: number, querySearch: string, userId: number) {
        this.numberOfPostToShow = numberOfPostToShow;
        this.querySearch = querySearch;
        this.userId = userId;
    }

}
