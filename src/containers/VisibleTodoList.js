import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (state, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return state.todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return state.todos.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return state.todos.filter(t => !t.completed);
        case VisibilityFilters.SHOW_NONE:
            return [];

        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const mapStateToProps = state => ({
    todos: getVisibleTodos(state, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

// TodoList get 2 parameters:
// 1 - all todos with visible filter from state,
// 2 -
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)