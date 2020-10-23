import { animate, state, style, transition, trigger } from '@angular/animations';

export let fade = trigger('fade',[
    state('void', style({opacity:0})),

    transition(':enter, :leave',[
      animate(2000)
    ])
  ])


  export let slideInOut =  trigger('slideInOut', [
    transition(':enter', [
      style({transform: 'translateX(-30px)', opacity:0}),
      animate('1000ms ease-in', style({transform: 'translateX(0%)', opacity:1}))
    ]),
    transition(':leave', [
      animate('1000ms ease-out', style({transform: 'translateX(-80px)', opacity:0}))
    ])
  ])
