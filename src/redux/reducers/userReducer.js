import { CREATE_USER } from '../types';

const initialState = {
    users: []
}

export const userReducer = (state=initialState, action) => {
    switch(action.type){
        case CREATE_USER:
            return {...state, users:state.users.concat([action.payload])};
        default: return state;
    }
};
