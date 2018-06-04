import * as actionTypes from './actionTypes';
import axios from "axios";

// export const addIngredient = (name) => {
//     return {
//         type: actionTypes.ADD_INGREDIENT,
//         ingredientName: name
//     };
// };

export const loadTestVar =  () => {
    return {
        type: actionTypes.TESTING_REDUX,
        testvar: 'testing redux bro'
    }
}