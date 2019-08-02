import React from 'react'
import FilterLink from '../containers/FilterLink'
import {VisibilityFilters} from '../actions'
import CleanList from '../containers/CleanList'

const Footer = () => (
    <div>
        <span>Show: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_NONE}>Hide</FilterLink>
        <CleanList>Clean List</CleanList>
    </div>
);

export default Footer