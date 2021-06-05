import React,{ useEffect, useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";


function Time({ match }) {
    const [clock, setClock] = useState("");
    useEffect(() =>{
        GetTime();
    }, [])

    const GetTime = () =>{
        axios.get(`http://worldtimeapi.org/api/timezone/${match.params.continent}/${match.params.place}`
        ).then((res) => setClock(res.data.datetime))
    }
    return (
        <div className="container">
            <div className="card">
                <Link to={"/"} className="btn-floating halfway-fab waves-light waves-effect deep-orange">
                    <i className="material-icons">undo</i>
                </Link>
                <div className="card-content">
                    <h4 className="center deep-orange">{match.params.place}</h4>
                    <h1 className="center">{moment(clock).calendar()}</h1>
                </div>
            </div>
        </div>
    )
}

export default Time
