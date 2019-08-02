import React from 'react'
import {connect} from 'react-redux'
import {maxSize} from '../actions/index'

const Counter = ({itemsCount}) => {

    return (
        <div>
            <p> Max attached tasks {maxSize} / {itemsCount}</p>
        </div>
    )
};

export default connect(
)(Counter)