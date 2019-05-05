import { trigger, transition, style, animate, query, group, stagger } from '@angular/animations';

export const listAnimation =
  trigger('listAnimations', [
    transition('* => *', [ // each time the binding value changes
      // query(':leave', [
      //   stagger(100, [
      //     animate('0.4s', style({ opacity: 0 }))
      //   ])
      // ], { optional: true }),
      // query(':leave', animate('50ms', style({ opacity: 0 })), { optional: true }),
      query(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        stagger('70ms', [
          animate('0.4s', style({ opacity: 1, transform: 'translateY(0px)' }))
        ])
      ], { optional: true })
    ])
  ]);
