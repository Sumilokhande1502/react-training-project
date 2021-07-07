

function Cake(props){
   console.log("these are the props", props)
    return(
        <div className="card mt-3 ml-3" style={{width: 18+'rem'}}>
            <img style={{height: 200+'px'}} src={props.data.image}className="card-img-top" alt="..." />
            <div className="card-body">
                <h6 className="card-title">{props.data.name}</h6>
                <p className="card-text">{props.data.price} rs.</p>
                <a className="" href="_blank" className="btn btn-primary">Add to cart</a>
            </div>
        </div>
    )   
}

export default Cake