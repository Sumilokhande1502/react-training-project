import cakes from './Cakesdata';
import {useState, useEffect} from 'react';

export default function Search(){

    var [cakesData, setCakesData] = useState(cakes);
  
    let searchObj = {};
    useEffect(() => { 
      
    }, [])
  
    var searchBtn = function (e){
        searchObj.search = e.target.value;

        setCakesData(cakesData)
    }

    return(
        <div className="row">
            <div className="col-12">
                <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button onClick={searchBtn} className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
                </form>
            </div>
            <div className="col-12">

            </div>
        </div>
    
    )
}
