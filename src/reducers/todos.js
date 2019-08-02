import {maxSize} from '../actions/index'

const todos = (state = [], action) => {
    switch (action.type) {
        // Add new object to array of states.
        case 'ADD_TODO':
            if (state.filter(t => !t.completed).length >= maxSize) {
                return state
            }
            state.map(todo =>
                todo.id === action.id ? {...todo, completed: !todo.completed} : todo
            );
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        // if id compared with some id from store - change 'completed' to true/false
        // for this element.
        case 'TOGGLE_TODO':
            if (state.filter(t => !t.completed).length >= maxSize ) {
                return state.map(todo =>
                    todo.id === action.id ? {...todo, completed: true} : todo
                );
            }
            return state.map(todo =>
                todo.id === action.id ? {...todo, completed: !todo.completed} : todo
            );
        default:
            return state
    }
};


export default todos