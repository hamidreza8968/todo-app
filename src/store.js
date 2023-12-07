import {createStore} from "redux";
import {func} from "prop-types";


const initialState = {
    modalIsOpen: false,
    tasks : [{id: 0, title: "" , status: "Incomplete"}]
};


export function addTask(title , status){
    return {type:"tasks/addTask" , payload:{title , status}};
}
export function updateTitle(title){
    return {type:"task/updateTitle" , payload:title};
}
export function updateStatus(status){
    return {type:"task/updateStatus" , payload:status};
}
export function openingModal(){
    return {type:"modal/openingModal"};
}

function taskReducer(state=initialState , action) {
    switch (action.type) {
        case "tasks/addTask":
            return {...state , tasks: [...{id: action.payload.id,title: action.payload.title , status: action.payload.status}]};
        case "task/updateTask":
            return {...state , tasks: [...{title: action.payload.title , status: action.payload.status}]};
        case "task/deleteTask":
            return {...state , tasks: state.tasks.filter(task => task.id !== action.payload.id)};
        case "modal/openingModal":
            return {...state , modalIsOpen: true};
        default:
            return state;
    }
}

const store = createStore(taskReducer);


export default store;

