import {createStore} from "redux";
import {func} from "prop-types";


const initialState = {
    modalIsOpen: false,
    title: "",
    status: "Incomplete",
};


function addTask(title , status){
    return {type:"task/addTask" , payload:{title , status}};
}
function updateTitle(title){
    return {type:"task/updateTitle" , payload:title};
}
function updateStatus(status){
    return {type:"task/updateStatus" , payload:status};
}
function openingModal(){
    return {type:"modal/openingModal"};
}

function taskReducer(state=initialState , action) {
    switch (action.type) {
        case "task/addTask":
            return {...state , title: action.payload.title , status: action.payload.status};
        case "task/updateTitle":
            return {...state , title: action.payload};
        case "task/updateStatus":
            return {...state , status: action.payload};
        case "modal/openingModal":
            return {...state , modalIsOpen: true};
        default:
            return state;
    }
}

const store = createStore(taskReducer);


export default store;

