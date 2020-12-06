import {
  trigger,
  transition,
  animate,
  style,
  query,
} from '@angular/animations';

// Routable animations
const fadeAnimation = [
  transition('* => *', [
    query(
      ':enter, :leave',
      style({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }),
      { optional: true }
    ),
    query(':enter', [style({ opacity: 0 })], {
      optional: true,
    }),
    query(':leave', [animate('0.5s', style({ opacity: 0 }))], {
      optional: true,
    }),
    query(':enter', [animate('0.5s', style({ opacity: 1 }))], {
      optional: true,
    }),
  ]),
];

export const routeAnimation = trigger('routeAnimation', fadeAnimation);
