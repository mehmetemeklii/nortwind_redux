import { combineReducers } from "redux"
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer"
import productsListReducer from "./productsListReducer"
import cartReducer from "./cartReducer"
import saveProductReducer from "./saveProductReducer"
const rootReducer = combineReducers({
    changeCategoryReducer:changeCategoryReducer ,
    //changeCategoryReducer  , buradaki işlem yukarıdaki ve bu aynıdır
    categoryListReducer:categoryListReducer,
    productsListReducer:productsListReducer,
    cartReducer:cartReducer,
    saveProductReducer:saveProductReducer

})

export default rootReducer;