import {createStore} from "redux";

const initialState = {
    items : []
};

export function addItem(item){
    return {type:"items/addItem" , payload:item};
}
export function editItem(itemId , updatedItem){
    return {type:"items/editItem" , payload:{itemId , updatedItem}};
}
export function deleteItem(itemId){
    return {type:"items/deleteItem" , payload:itemId};
}


function itemsReducer(state=initialState , action) {
    switch (action.type) {
        case "items/addItem":
            return {...state , items:[...state.items, action.payload]};
        case "items/editItem":
            const {itemId , updatedItem} = action.payload;
            const updatedItems = state.items.map(item => item.id===itemId ? {...item , ...updatedItem} : item);
            return {...state , items:updatedItems};
        case "task/deleteTask":
            return {...state , items: state.items.filter(item => item.id !== action.payload)};
        default:
            return state;
    }
}

const store = createStore(itemsReducer);


export default store;

