import React, { useState }  from 'react'
// import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";


function Bio() {

    const history = useHistory()

    const routeChange = () => {
        let path = "/workhistories"
        history.push(path)
    }

    // const [bios, setBios] = useState([])
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [linkedin, setLinkedin] = useState("")


    function handleSubmit(e) {
        e.preventDefault()
            fetch("/bios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify({
                    name,
                    address,
                    phone,
                    email,
                    linkedin
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
        <div className="bioForm">
            <form onSubmit={handleSubmit}>
                <h1>Bio</h1>
                    <label htmlFor="name">name</label>
                    <input 
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                    <label>address</label>
                    <input 
                        type="text"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}/>
                    <label>phone</label>
                    <input 
                        type="text"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}/>
                    <label>email</label>
                    <input 
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    <label>linkedin</label>
                    <input 
                        type="text"
                        name="linkedin"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}/>
                    <button type="submit" >Save</button>
                <p className="route">
                    <button className="router" onClick={routeChange} >Next Work History</button>
                </p>
            </form>
            
        </div>
    )
}

export default Bio;