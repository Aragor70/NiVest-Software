import { Action } from '@ngrx/store';
import { TodoTypes } from './types';

export class ActionParent implements Action {

    type: any;
    payload: any;
    
}

export class TodoAdd implements ActionParent {

    type: TodoTypes.Add;
    
    constructor(public payload: any) {

    }
    

}