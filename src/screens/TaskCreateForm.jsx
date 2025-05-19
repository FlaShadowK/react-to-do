import {useState} from "react";
import {useNavigate} from "react-router";

const TaskCreateForm = () => {

    const [name, setName] = useState("name");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const handleCreate = () => {

        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        localStorage.setItem("tasks", JSON.stringify(
            [
                ...tasks,
                {
                    name,
                    description,
                    status: 1,
                    id: Date.now()
                }
            ]
        ))

        navigate("/");
    }


    return (
        <div className="row justify-center">
            <div className="column w-30">
                <div>Create a task</div>
                <input type="text"
                       onChange={(e) => setName(e.target.value)}
                       placeholder="Task name"/>
                <input type="text"
                       onChange={(e) => setDescription(e.target.value)}
                       placeholder="Task description"/>
                <button onClick={handleCreate}>Create</button>
            </div>
        </div>
    )
}

export default TaskCreateForm