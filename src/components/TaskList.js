import { useEffect, useState } from "react";

export default function TaskList(){

    const [tasks, setTasks] = useState([]);
    console.log(tasks)

    useEffect(() => {
        fetchTasks()
    }, [])

    async function fetchTasks() {

        const url = "http://localhost:8080/api/task";

        try {
            const response = await fetch(url, {
                method: "GET", // Specify the HTTP method
                headers: {
                    "Content-Type": "application/json", // Indicate JSON request
                } // Convert the request body to JSON string
            });

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            setTasks(json)
            console.log(json); // Handle the response
        } catch (error) {
            console.error("Error:", error.message);
        }
    }

    return (

        <div>
            {tasks.map((task) => {
                {console.log(task)}
                return(<ul>
                    <li>{task.taskName}</li>
                    <li>{task.taskDescription}</li>
                </ul>)
            })}
        </div>

    );
}