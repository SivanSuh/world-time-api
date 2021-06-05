import React, { useEffect , useState } from 'react'
import { Link } from "react-router-dom";


function City() {
    const [ citys , setCitys] = useState([]);
    const [changecity, setChangeCity] = useState(null);


    useEffect(() =>{
        Citys();
    }, [])
    const Citys = async() =>{
        const response = await fetch("http://worldtimeapi.org/api/timezone");
        const cityjson = await response.json();
        console.log(cityjson)
        setCitys(cityjson);
    }
    const CityFilters = (e) =>{
        const input = e.target.value;
        console.log(input)

        setChangeCity((Preveuscity) =>{
            return(
                citys.filter((s) =>{
                    return s.toLowerCase().includes(input.toLowerCase())
                })
            )
        })
    }
    return (
        <div>
            <div className="row container">   
                <form className="col s12 l12 m12">
                    <div className="input-field col s12">
                        <input type="text" id="city" className="input-field" onChange={CityFilters}/>
                        <label htmlFor="city" className="deep-blue-text">Citys</label>
                    </div>
                </form>
            </div>
            <div className="row">
                {changecity != null ? (changecity.map((s) =>(
                    <Link key={s} to={`/${s}`} >
                        <div  className="col l3 m4 s6">
                            <div className="card  teal lighten-3  blue lighten-1">
                                <div className="card-content white-text">
                                    <p>{s}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))) : (citys.map((s) =>(
                    <Link key={s} to={`/${s}`} >
                        <div  className="col l3 m4 s6">
                            <div className="card  teal lighten-3  blue lighten-1">
                                <div className="card-content white-text">
                                    <p>{s}</p>
                                </div>
                            </div>
                         </div>
                    </Link>
                )))}
            </div>
        </div>
    )
}

export default City
