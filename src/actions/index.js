let nextTodoId = 0;
export const maxSize = 3;

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    maxSize: maxSize,
    text
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const cleanList = () => ({
    type: 'CLEAN_LIST'
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_NONE: 'SHOW_NONE',
};

// export const fetchProducts = () => dispatch => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(posts =>
//             dispatch({
//                 type: 'FETCH_POSTS',
//                 payload: posts
//             })
//         );
// };