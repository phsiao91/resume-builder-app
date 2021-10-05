import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function Skill() {

    const history = useHistory()

    const routeChange = () => {
        let path = "/educations"
        history.push(path)
    }

    const [expertise, setExpertise] = useState("")
    const [rating, setRating] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
            fetch("/skills", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    expertise,
                    rating
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
                <h1>Skills</h1>
                    <label htmlFor="name">skill</label>
                    <input 
                        type="text"
                        name="expertise"
                        value={expertise}
                        onChange={(e) => setExpertise(e.target.value)}/>
                    <label>rate your skill from 1 to 5</label>
                    <input 
                        type="text"
                        name="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}/>
                    <button type="submit">Save</button>
            <p className="route">
                <button className="router" onClick={routeChange} >Next Education</button>
            </p>
            </form>
        </div>
    )
}

export default Skill