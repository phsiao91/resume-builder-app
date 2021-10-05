import React, {useState} from "react";

function Task() {

    const [details, setDetails] = useState("")

    const taskSubmit = (e) => {
        e.preventDefault()
        fetch("/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                details
            }),
        }).then(res => {
            if (res.ok) {
                return res.json()
                }else {
                return res.json().then(errors => Promise.reject(errors))
                }
            })
    }


    return(
        <div>
            <form onSubmit= {taskSubmit}>
                    <label>tasks</label>
                        <input 
                        type="text"
                        name="tasks"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}/>
                    <button type="submit">Save</button>
                </form>
        </div>
    )
}

export default Task