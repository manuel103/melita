import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    theme = signal<any>(localStorage.getItem('theme') || 'light');

    private _document = inject(DOCUMENT);

    constructor() {
        effect(() => {
            if (this.theme() === 'dark') {
                this._document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                this._document.documentElement.classList.remove('dark');
                localStorage.removeItem('theme');
            }
        });
    }

    toggleTheme() {
        this.theme.update((value) => {
            return value === 'light' ? 'dark' : 'light';
        });
    }
}
