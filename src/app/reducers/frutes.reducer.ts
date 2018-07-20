import { Action } from '@ngrx/store';

export const ADD = 'ADD_FRUTE';
export const REMOVE = 'REMOVE_FRUTE';


export class AddFrute implements Action {
    readonly type = ADD;

    constructor(public payload: string) { }
}

export class RemoveFrute implements Action {
    readonly type = REMOVE;

    constructor(public payload: string) { }
}

export type FruteActionsUnion =
    | AddFrute
    | RemoveFrute;


export function fruteReducer(state: string[] = ['Frutes'], action: FruteActionsUnion) {
    switch (action.type) {
        case ADD:
            return [...state, action.payload]
        default:
            return state;
    }
}