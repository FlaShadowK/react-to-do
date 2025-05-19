import TaskList from "../components/TaskList.jsx";
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";


const MainScreen = () => {

    const navigate = useNavigate();

    const [tasks, setTasks] = useState([])

    const loadTasks = () => {
        const localStorageTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(localStorageTasks);
    }

    useEffect(() => {
        loadTasks();
    }, [])

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
                <div>TO DO</div>
                <TaskList taskType={1} taskState={[tasks, setTasks]} loadTasks={loadTasks}/>
            </div>

            <div className="column align-center w-50">
                <div>DONE</div>
                <TaskList taskType={2} taskState={[tasks, setTasks]} loadTasks={loadTasks}/>
            </div>
        </div>
    )
}

export default MainScreen