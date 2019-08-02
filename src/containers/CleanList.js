import React from 'react'
import {connect} from 'react-redux'
import {cleanList} from '../actions'
import PropTypes from 'prop-types'
import clean from "../reducers/clean";
import Link from "../components/Link";


const CleanList = ({dispatch, children}) => {

    return (
        <button
              onClick={e => {
                  e.preventDefault();
                  dispatch(cleanList());
              }}
            >
            {children}
        </button>
    )
};

CleanList.propTypes = {
    onClick: PropTypes.func.isRequired
};


// const mapStateToProps = state => ({
//     ownProps.filter === state.visibilityFilter
// });

// const mapDispatchToProps = dispatch => ({
//     onClick: () => dispatch(cleanList())
//
// });


export default connect()(CleanList)