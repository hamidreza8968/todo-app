import Button from "../Button/Button";
import SelectButton from "../SelectButton/SelectButton"
import styles from "./AppHeader.module.css";

function AppHeader() {
    function onClick() {
        console.log("Add task!");
    }

    return(
        <div className={styles.header}>
            <Button onClick={onClick}>Add Task</Button>
            <SelectButton/>
        </div>
    )
}
export default AppHeader;