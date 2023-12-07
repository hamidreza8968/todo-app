import {useDispatch, useSelector} from "react-redux";
import {updateTitle , updateStatus , addTask} from "../../store";

function ModalWindow() {
    const title = useSelector(store => store.title);
    const status = useSelector(store => store.status);

    const dispatch = useDispatch();

    function handleChangeTitle(title) {
        dispatch(updateTitle(title));
    }
    function handleChangeStatus(status) {
        dispatch(updateStatus(status));
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target);
        // if (!title) return;
        // dispatch(addTask(title , status));
    }

    return (
        <div>
            <div>☓</div>
            <form onSubmit={handleSubmit}>
                <p>Add TODO</p>
                <label htmlFor="titleInput">Title</label>
                <input onChange={handleChangeTitle} type="text" id="titleInput" value={title}/>
                <label htmlFor="statusInput">Title</label>
                <input onChange={handleChangeStatus} type="text" id="statusInput" value={status}/>
                <button type="submit">vfrvrvrrf </button>
            </form>
        </div>
    )
}

export default ModalWindow;