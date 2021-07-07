

function Cake(props){
   console.log("these are the props", props)
    return(
        <div className="card mt-3 ml-3" style={{width: 18+'rem'}}>
            <img src={props.data.image}className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text">{props.data.price} rs.</p>
                <a href="" className="btn btn-primary">Add to cart</a>
            </div>
        </div>
    )   
}

export default Cake