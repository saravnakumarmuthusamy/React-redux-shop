import ActionType  from "../constants/ActionType";

const intialState={
    products:[
    ],
};

const productReducer= (state=intialState,{type,payload})=>{
    switch (type) {
        case ActionType.SET_PRODUCTS:
            return {...state,products:payload};
        default:
            return state;
    }
}

const selectProductReducer= (state={},{type,payload})=>{
    switch (type) {
        case ActionType.SELECTED_PRODUCT:
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
}


export {productReducer,selectProductReducer}

