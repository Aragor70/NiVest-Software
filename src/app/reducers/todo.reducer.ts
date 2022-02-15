import { ActionParent } from '../actions/todo';
import { Todo } from '../models/Todo';

export const initialState: Todo[] = [
    {
        title: 'ciao'
    },
    {
        title: 'ciao'
    },

];

const todoReducer = (state = initialState, action: ActionParent) => {
    const { type, payload } = action;
    switch (type) {


        default:
            return state;
    }

}

export default todoReducer;