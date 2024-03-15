import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UxDropdownMenuItem } from '@netcracker/ux-ng2/dropdown-menu';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
    _popoverVisible = false;
    _searchValue = '';
    _searchResults: UxDropdownMenuItem[] = [];
    _someResults: UxDropdownMenuItem[] = [
        {
            id: '1',
            text: 'Turkey',
        },
        {
            id: '2',
            text: 'USA',
        },
        {
            id: '3',
            text: 'UAE',
        },
    ];

    constructor(public elementRef: ElementRef, private router: Router) {}

    ngOnInit(): void {
        this._searchResults = this._someResults;
    }

    _onfilterResult(value: string): void {
        if (value) {
            this._searchResults = this._someResults.filter(item => item.text.toLowerCase().includes(value.toLowerCase()));
        } else {
            this._searchResults = this._someResults;
        }
    }

    _onSelectResult(result: any): void {}

    _openLoginModal(): void {
        this.router.navigate(['/new-post']);
    }

    _openPopOver(): void {
        this._popoverVisible ? setTimeout(() => (this._popoverVisible = true), 0) : (this._popoverVisible = true);
    }

    _onClosePopOver(): void {
        this._popoverVisible = false;
    }
}
