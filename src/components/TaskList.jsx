import {useEffect, useState} from "react";

const TaskList = ({taskType = 1, taskState, loadTasks, bgColor = '#FFF'}) => {

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
            status: parseInt(status)
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


    const handleDeleteTask = (e, task) => {

        console.log(e);
        if(e.altKey){
            const localStorageTasks = JSON.parse(localStorage.getItem("tasks")) || [];


            const updatedTasks = localStorageTasks.filter(t => {
                if (t.id !== task.id) {
                    return t;
                }
            })

            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            loadTasks();
        }
    }

    return (
        <div className="w-90 p-4 column gap-2 rounded h-100" style={{backgroundColor: bgColor}}>
            {filteredTasks.map((task, index) => (
                <div key={index} className="row justify-between border p-4" onClick={e => handleDeleteTask(e, task)}>
                    <div className="column">
                        <div>{task.name}</div>
                        <div className="text-small">{task.description}</div>
                    </div>

                    <select value={task.status} onChange={(e) => setTaskStatus(task, e.target.value)}>
                        <option value={1}>TO DO</option>
                        <option value={2}>DONE</option>
                        <option value={3}>DOING</option>
                        <option value={4}>TESTING</option>
                        <option value={5}>NE ZNAM</option>
                    </select>
                </div>
            ))}
        </div>
    )
}

export default TaskList