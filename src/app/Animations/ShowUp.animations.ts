import { trigger, state, style, transition, animate, stagger, query } from "@angular/animations";

export const showUpStagger = trigger('showUpCollection', 
[
    transition('* => *',
    [
        query(':enter', 
        [
            style({opacity: 0, transform: 'scaleY(0)'}),
            stagger(200, 
            [
                animate(250, style({opacity: 1, transform: 'scaleY(1)'}))
            ])
            
        ], {optional: true})
    ])
]);

export const showUp = trigger('showUpElement', 
[
    state('in', style({opacity: 1, transform: 'scaleY(1)'})),
    transition(':enter', 
    [
        style({opacity: 0, transform: 'scaleY(0)'}),
        animate(250)
    ])
]);