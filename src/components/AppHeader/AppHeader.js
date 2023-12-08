import Button from "../Button/Button";
import SelectButton from "../SelectButton/SelectButton"
import styles from "./AppHeader.module.css";

import {useDispatch} from "react-redux";


function AppHeader({modalIsOpen , onOpenModal , onCloseModal}) {

    const dispatch = useDispatch();

    return(
        <div className={styles.header}>
            <Button onClick={onOpenModal}>Add Task</Button>
            <SelectButton/>
        </div>
    )
}
export default AppHeader;