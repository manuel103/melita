import { trigger, style, transition, animate, keyframes } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms',
            style({ opacity: 1 })
        )
    ]),
    transition(':leave', [
        style({ opacity: 1 }),
        animate('350ms',
            style({ opacity: 0 })
        )
    ])
])

export const rotate = trigger('rotate', [
    transition(':enter', [
        animate('1000ms',
            keyframes([
                style({ transform: 'rotate(0deg)', offset: '0' }),
                style({ transform: 'rotate(2turn)', offset: '1' })
            ])
        )
    ])
])