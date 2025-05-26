import {use, useEffect, useState} from "react";
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

    useEffect(() => {
        const handleKeyDown = (event) =>{
            if (event.key === "Enter") {
                handleCreate();
            }
        }

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);


    return (
        <div className="row justify-center" style={{marginTop: "10px"}}>
            <div className="column w-30 gap-10">
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