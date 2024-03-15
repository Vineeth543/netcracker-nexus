import { Component } from '@angular/core';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.less'],
})
export class SearchResultsComponent {
    searchResults = [
        {
            title: 'How can I add my parents to the group medical insurance?',
            description:
                'I am a full-time employee at Netcracker and I want to add my parents to the group medical insurance. How can I do that?',
            author: 'John Doe',
            date: '12 Nov 2020',
            votes: 5,
            answers: 3,
            views: 10,
        },
        {
            title: 'How to change the tax regime for the next year?',
            description: 'I want to change the tax regime for the next year. What should I do?',
            author: 'Mary Smith',
            date: '15 Nov 2022',
            votes: 3,
            answers: 0,
            views: 5,
        },
        {
            title: 'How to get a discount for the gym?',
            description: 'I want to get a discount for the gym. How can I do that?',
            author: 'Chris Johnson',
            date: '19 Sep 2024',
            votes: 2,
            answers: 2,
            views: 7,
        },
    ];
}
