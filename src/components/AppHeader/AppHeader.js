import Button from "../Button/Button";
import styles from "./AppHeader.module.css";

function AppHeader() {
    function onClick() {
        console.log("Add task!");
    }

    return(
        <div className={styles.header}>
            <Button onClick={onClick} color="#6d6df6">Add Task</Button>
        </div>
    )
}
export default AppHeader;