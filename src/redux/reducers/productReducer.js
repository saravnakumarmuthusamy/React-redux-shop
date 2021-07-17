import ActionType  from "../constants/ActionType";

const intialState={
    products:[
    ],
};

export const productReducer= (state=intialState,{type,payload})=>{
    switch (type) {
        case ActionType.SET_PRODUCTS:
            return {...state,products:payload};
        default:
            return state;
    }
}




