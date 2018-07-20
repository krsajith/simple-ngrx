import { Action } from '@ngrx/store';

export const ADD = 'ADD';
export const REMOVE = 'REMOVE';


export class AddName implements Action {
    readonly type = ADD;

    constructor(public payload: string) { }
}

export class RemoveName implements Action {
    readonly type = REMOVE;

    constructor(public payload: string) { }
}

export type NameActionsUnion =
    | AddName
    | RemoveName;


export function nameReducer(state: string[] = ['Names'], action: NameActionsUnion) {
    switch (action.type) {
        case ADD:
            return [...state, action.payload]
        default:
            return state;
    }
}