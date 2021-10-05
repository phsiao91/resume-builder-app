import React, {useState} from "react";
// import DatePicker from 'react-date-picker';
import { useHistory } from "react-router-dom";


function Education() {

    const [school, setSchool] = useState("")
    const [degree, setDegree] = useState("")
    const [start_date, setStartDate] = useState("")
    const [end_date, setEndDate] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        // const wh = {title,
        //     company,
        //     start_date,
        //     endDate}
        //     console.log(wh)
            fetch("/educations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    school,
                    degree,
                    start_date,
                    end_date
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
            <form onSubmit={handleSubmit}>
                <h1>Education</h1>
                    <label htmlFor="title">school</label>
                    <input 
                        type="text"
                        name="school"
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}/>
                    <label>degree</label>
                    <input 
                        type="text"
                        name="degree"
                        value={degree}
                        onChange={(e) => setDegree(e.target.value)}/>
                    <label>Start Date</label>
                    <input
                        type="date"
                        name="startDate"
                        value={start_date}
                        onChange={(e) => setStartDate(e.target.value)}
                        />
                    <label>End Date</label>
                    <input
                        type="date"
                        name="endDate"
                        value={end_date}
                        onChange={(e) => setEndDate(e.target.value)}/>
                    <button type="submit">Save</button>
                </form>
            {/* <p className="route">
                <button className="router" onClick={routeChange} >Next Skills</button>
            </p> */}
        </div>
    )
}

export default Education