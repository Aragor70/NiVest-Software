import { Action } from '@ngrx/store';
import { BinaryTreeTypes } from './types';

export class ActionParent implements Action {

    type: any;
    payload: any;
    
}

export class ValueAdd implements ActionParent {

    type: BinaryTreeTypes.Add;
    
    constructor(public payload: any) {

    }
}
