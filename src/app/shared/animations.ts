import { trigger, transition, style, animate, query, group, stagger, keyframes, state } from '@angular/animations';

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

export const recordAnimation =
  trigger('recordAnimations', [
    state('default', style({ transform: 'rotate(360deg)' })),
    state('rotated', style({ transform: 'rotate(0)' })),
    transition('rotated => default', animate('500ms ease-out')),
    // transition('default => rotated', animate('400ms ease-in'))

    transition('default => rotated', animate('500ms', keyframes([
      style({transform: 'rotate(0)', offset: 0}),
      //style({transform: 'rotate(210deg)', offset: 0.5}),
      style({transform: 'rotate(360deg)', offset: 1.0})
    ])))

      // transition('* => move',
      // animate('2000ms', keyframes([
      //   style({transform: 'rotate(0deg)',        offset: 0}),
      //   style({transform: 'rotate(180deg)',        offset: 0.33}),
      //   style({transform: 'rotate(-30deg)',    offset: 0.66}),
      //   style({transform: 'rotate(0deg)',    offset: 1.0}),
        // style({transform: 'translateY(-75%) rotateY(180deg)',   offset: 0.66}),
        // style({transform: 'translateX(-100%)',                  offset: 1.0})
      // ])
    // ))
  ]);