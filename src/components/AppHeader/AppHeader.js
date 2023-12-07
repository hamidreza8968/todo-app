import Button from "../Button/Button";
import SelectButton from "../SelectButton/SelectButton"
import styles from "./AppHeader.module.css";

import {useDispatch} from "react-redux";
import {openingModal} from "../../store";


function AppHeader() {

    const dispatch = useDispatch();

    function handleAddTaskOpenModal() {
        dispatch(openingModal());
    }

    return(
        <div className={styles.header}>
            <Button onClick={handleAddTaskOpenModal}>Add Task</Button>
            <SelectButton/>
        </div>
    )
}
export default AppHeader;