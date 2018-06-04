import * as actionTypes from '../actions/actionTypes';

const initialState = {
    othertestvar: 'just another test var'
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.TESTING_REDUX:
            return {
                ...state,
                testredux2: action.testvar
            }
        default:
            return state; 
        
    }


}

export default reducer;