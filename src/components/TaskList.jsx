import {useEffect, useState} from "react";

const TaskList = ({taskType = 1, taskState, loadTasks}) => {

    const [tasks, setTasks] = taskState;
    const [filteredTasks, setFilteredTasks] = useState([]);

    const filterTasks = (tasks) => tasks.filter(task => task.status === taskType);

    useEffect(() => {

        setFilteredTasks(filterTasks(tasks));
    }, [tasks])

    const setTaskStatus = (task, status) => {

        const localStorageTasks = JSON.parse(localStorage.getItem("tasks")) || [];

        const changedTask = {
            ...task,
            status: status
        }

        const updatedTasks = localStorageTasks.map(t => {
            if (t.id === changedTask.id) {
                return changedTask;
            }
            return t;
        })

        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        loadTasks();
    }


    return (
        <div className="w-70 column gap-2">
            {filteredTasks.map((task, index) => (
                <div key={index} className="row justify-between border p-4" onClick={() => setTaskStatus(task, task.status === 1 ? 2 : 1)}>
                    <div>{task.name}</div>
                    <div>{task.description}</div>
                </div>
            ))}
        </div>
    )
}

export default TaskList