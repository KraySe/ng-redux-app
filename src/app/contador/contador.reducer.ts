import { createReducer, on, Action } from '@ngrx/store';
import { increment, decrement } from './contador.actions';

// export function counterReducer(state: number = 10, action: Action) {
//     switch (action.type) {
//         case increment.type:
//             return state + 1;
//         case decrement.type:
//             return state - 1;
//         default:
//             return state;
//     }
// }

export const initialState = 20;

const _counterReducer = createReducer(
    initialState,
    on(increment, state => state + 1),
    on(decrement, state => state - 1)
)

export function counterReducer(state: number = initialState, action: Action) {
    return _counterReducer(state, action)
}