import  { combineReducers }  from "redux";
import  { productReducer,selectProductReducer }  from "../reducers/productReducer";

export const reducers = combineReducers({
    allProducts:productReducer,
    product:selectProductReducer
});


 