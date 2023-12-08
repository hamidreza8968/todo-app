import {useDispatch, useSelector} from "react-redux";
import {addItem, deleteItem, editItem} from "../../store";
import {useState} from "react";
import Button from "../Button/Button";
import styles from "./ModalWindow.module.css";

function ModalWindow({onCloseModal}) {
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("Incomplete");

    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.items);

    function handleSubmit(e) {
        e.preventDefault();
        if (!title) return;
        dispatch(addItem({id: tasks.length + 1, title: title, status: status}));
        setTitle("");
        setStatus("Incomplete");
    }

    return (
        <div className={styles.modalWrapper}>
            <div className={styles.modalContainer}>
                <div className={styles.closeModalBtn} onClick={onCloseModal}>☓</div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <p>Add TODO</p>
                    <div className={styles.inputPack}>
                        <label htmlFor="titleInput">Title</label>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" id="titleInput"/>
                    </div>
                    <div className={styles.inputPack}>
                        <label htmlFor="statusInput">Status</label>
                        <input value={status} onChange={(e) => setStatus(e.target.value)} type="text" id="statusInput"/>
                    </div>
                    <Button type="submit">Add Task</Button>
                </form>
            </div>
        </div>
    )
}

export default ModalWindow;