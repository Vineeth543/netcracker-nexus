import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
    _searchValue = '';

    constructor(public elementRef: ElementRef, private router: Router) {}

    _searchQuestion(): void {
        this.router.navigate(['/search', this._searchValue.toLocaleLowerCase()]);
    }

    _openLoginModal(): void {
        this.router.navigate(['/new-post']);
    }
}
