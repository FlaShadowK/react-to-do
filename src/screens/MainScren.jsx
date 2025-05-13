import TaskList from "../components/TaskList.jsx";
import {useNavigate} from "react-router";


const MainScreen = () => {

    const navigate = useNavigate();

    const handleCreateTask = () => {
        navigate("/create_task");
    }

    return (
        <div className="column align-center w-100">
            <div className="row justify-between w-50">
                <div>Task List</div>
                <button onClick={handleCreateTask}>Create a task</button>
            </div>

            <div className="column align-center w-50">
                <div>List</div>
                <TaskList />
            </div>
        </div>
    )
}

export default MainScreen