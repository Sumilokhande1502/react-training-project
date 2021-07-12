import {useEffect} from 'react';
import axios from 'axios';

function Cakedetails(props) {

    useEffect(() =>{
        let apiurl = `https://apifromashu.herokuapp.com/api/cake/${props.match.params.cakeid}`
        axios.get(apiurl).then(response =>{
            console.log(response);
        })
    }, [])

    return(
        <div>
            Cake details page {props.match.params.cakeid}
        </div>
    )
}

export default Cakedetails