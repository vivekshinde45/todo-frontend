import { useState } from "react";

export default function Task(){
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    // console.log(taskName);

    async function submitTask() {
        console.log("in function submitTask(): taskName:", taskName);
        console.log("in function submitTask(): taskDescription:", taskDescription);
        const url = "http://localhost:8080/api/task";

        // Request body
        const task = {
            taskName: taskName,
            taskDescription: taskDescription,
        };

        try {
            const response = await fetch(url, {
                method: "POST", // Specify the HTTP method
                headers: {
                    "Content-Type": "application/json", // Indicate JSON request
                },
                body: JSON.stringify(task), // Convert the request body to JSON string
            });

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            alert("task created sucessfully")
            const json = await response.json();
            console.log(json); // Handle the response
        } catch (error) {
            console.error("Error:", error.message);
        }
    }

    
    function changeTask(e){
        let temp = e.target.value;
        setTaskName(temp)
        console.log("in function changeTask " + taskName);
    }

    function changeTaskDescription(e){
        let temp = e.target.value;
        setTaskDescription(temp);
        console.log("in function changeTaskDescription " + taskDescription);
    }

    return(
        <div  style={{display:"flex", justifyContent:"center", alignItems:"center", paddingBottom:"100px"}}>
            <div>

                <h1>Todo List</h1>
                <div>
                    <label>Task Name</label>
                    <input name="taskName" onChange={(e) => changeTask(e)}></input>
                </div>

                <div>
                    <label>Task Description</label>
                    <input name="taskDescription" onChange={(e) => changeTaskDescription(e)}></input>
                </div>
                <button onClick={submitTask}>Submit</button>
            </div>
        </div>

    );
}