
const clean = (state = [], action) => {
    switch (action.type) {
        case 'CLEAN_LIST':
           // console.log(123);
            return  state = state.previous;
        default:
            return state;
    }
};

export default clean