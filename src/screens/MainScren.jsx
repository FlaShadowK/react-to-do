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
        <div className="column align-center w-100 gap-30 h-dvh">
            <div className="row justify-between w-50">
                <div>Task List</div>
                <button onClick={handleCreateTask}>Create a task</button>
            </div>

            <div className="row w-70 h-100">
                <div className="column align-center w-100">
                    <div>TO DO</div>
                    <TaskList bgColor={"rgba(89,89,89,0.42)"} taskType={1} taskState={[tasks, setTasks]} loadTasks={loadTasks}/>
                </div>

                <div className="column align-center w-100">
                    <div>DOING</div>
                    <TaskList bgColor={"rgba(0,0,255,0.42)"} taskType={3} taskState={[tasks, setTasks]} loadTasks={loadTasks}/>
                </div>

                <div className="column align-center w-100">
                    <div>DONE</div>
                    <TaskList bgColor={"rgba(15,255,0,0.42)"} taskType={2} taskState={[tasks, setTasks]} loadTasks={loadTasks}/>
                </div>

                <div className="column align-center w-100">
                    <div>TESTING</div>
                    <TaskList bgColor={"rgba(15,255,0,0.42)"} taskType={4} taskState={[tasks, setTasks]} loadTasks={loadTasks}/>
                </div>

                <div className="column align-center w-100">
                    <div>NE ZNAM</div>
                    <TaskList bgColor={"rgba(15,255,0,0.42)"} taskType={5} taskState={[tasks, setTasks]} loadTasks={loadTasks}/>
                </div>
            </div>
        </div>
    )
}

export default MainScreen