import {Link} from 'react-router-dom';


let Cake = (props)=>{
   //console.log("these are the props", props)
   let style={textDecoration: 'none'}
   if(props.data){
               // console.log(props.data.cakeid);
    return <div className="card mt-3 card_customHover" style={{width: "18em", marginLeft:40+'px'}}>
                <Link to={"/cake/"+props.data.cakeid} style={style}><img style={{height: "15em"}} src={props.data.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title">{props.data.name}</h6>
                        <p className="card-text">{props.data.price} rs.</p>
                    </div>
                </Link>
                <div className="btn-group m-3">
                    <button type="button" className="btn btn-primary mr-3">Add to cart</button>
                    <button type="button" className="btn btn-primary btn-small">Buy Now</button>
                </div>
            </div>
   }
   else{
       return null;
   }  
}

export default Cake