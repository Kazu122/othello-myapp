import { createStore } from "redux";
import { combineReducers } from "redux";

const initialState = {
    size: 8,
    board: Array().fill(null),
}

const sizeReducer = (state: any, action: any)  => (state: any)=> {
    switch (action.type) {
        case "SIZE_UP":
            return {
                size: state.size + 1
            };
        
        case "SIZE_DOWN":
            return {
                size: state.size - 1
            };
        
        default:
            return state;
    }
};

const updateBoardReducer = () => {
    return;
};

const postsReducer = () => {(state = initialState) => {
        return state;
    }
}

const rootReducer = combineReducers({
    size: sizeReducer,
    updateBoard: updateBoardReducer,
    posts: postsReducer,
})

const Store = createStore(rootReducer);

export default Store;