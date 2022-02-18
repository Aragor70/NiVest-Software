import { ActionParent } from '../actions/todo';
import { BinaryTree } from '../models/BinaryTree';
import { setup } from '../utils/binaryTree';




export const initialState: BinaryTree = { 
    nodes: setup()
};

const binaryTreeReducer = (state = initialState, action: ActionParent) => {
    const { type, payload } = action;
    switch (type) {


        default:
            return state;
    }

}

export default binaryTreeReducer;


