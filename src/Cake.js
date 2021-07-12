import {Link} from 'react-router-dom';


let Cake = (props)=>{
   //console.log("these are the props", props)
   if(props.data){
               // console.log(props.data.cakeid);
    return <div className="card mt-3" style={{width: "18em", marginLeft:40+'px'}}>
                <Link to={"/cake/"+props.data.cakeid}><img style={{height: "15em"}} src={props.data.image} className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                    <h6 className="card-title">{props.data.name}</h6>
                    <p className="card-text">{props.data.price} rs.</p>
                    <a className="" href="_blank" className="btn btn-primary">Add to cart</a>
                </div>
            </div>
   }
   else{
       return null;
   }  
}

export default Cake