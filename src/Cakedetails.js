import { useState, useEffect } from "react";
import axios from "axios";

function Cakedetails(props) {
  let cakesData;
  let [description, setDescription] = useState();
  let [name, setName] = useState();
  let [price, setPrice] = useState();
  let [flavour, setFlavour] = useState();
  let [image, setImage] = useState();

  useEffect(() => {
    let apiurl = `https://apifromashu.herokuapp.com/api/cake/${props.match.params.cakeid}`;
    axios.get(apiurl).then((res) => {
      console.log(res);
      cakesData = res;
      setName(cakesData.data["data"].name);
      setPrice(cakesData.data["data"].price);
      setDescription(cakesData.data["data"].description);
      setFlavour(cakesData.data["data"].flavour);
      setImage(cakesData.data["data"].image);
    });
  }, []);

  return (
    <div className="container-fluid justify-content-center">
        <div className="row">
            <div className="col-md-12 mt-5 text-center">
                <h3>Cake Details</h3>
            </div>
        </div>
        <div className="row mr-2 cakeDetailsBox">
          <div className="col-md-4 d-flex justify-content-center">
            <img
              src={image}
              className="card-img-top mt-5 mb-5 imageBorder"
              alt="..."
            />
          </div>
          <div className="col-md-8 mt-5 mb-5" style={{fontSize: 20+'px'}}>
              <p><b>Name:</b> {name}</p>
              <p><b>Flavour:</b> {flavour}</p>
              <p><b>Price:</b> {price} Rs.</p>
              <p><b>Description:</b> {description}</p>
                <div className="button-goup">
                    <button type="button" href="_blank" className="btn btn-primary mr-3">Add to cart</button>
                    <button type="button" href="_blank" className="btn btn-primary">Buy Now</button>
                </div>
        </div>
        </div>
    </div>
  );
}

export default Cakedetails;
