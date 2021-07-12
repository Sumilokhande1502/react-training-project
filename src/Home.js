import Loader from "react-loader-spinner";
import Navbar from "./Navbar";
import Fileupload from './Addcake';
import { Carousel } from "./Carousel";
import Login from "./Login";
//import Search from "./Search";
import Cake from "./Cake";
import { useState, useEffect } from "react";
import cakesdata from "./Cakesdata";

let Home = () =>{
  // const [ spinner, setSpinner ] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setSpinner(false), 1000)
  // }, []);

    let [searchtext, setSearchtext] = useState("");
    const [cakeData, setCakeData] = useState(cakesdata);
    let cakeArray = cakesdata;
    let function1 = function (searchstring) {
      setSearchtext(searchstring);
  
      if (searchstring !== "") {
        const cakeArray = cakesdata.filter((el) =>
          el.name.toLowerCase().includes(searchstring)
        );
        console.log(cakeArray);
        setCakeData(cakeArray);
        setSearchtext('')
        return { cakeArray };
      } else {
        cakeArray = cakesdata;
        setCakeData(cakeArray);
        setSearchtext('')
        return { cakeArray };
      }
    };
    useEffect(() => {}, []);

    return(  
      <div className="container-fluid">
               <Loader
               id="spinner"
            type="ThreeDots"
            color="#00BFFF"
             height={100}
            width={100}
            timeout={3000} //3 secs
        />
            <div>
        <Navbar fun={function1}>Cakes Gallary</Navbar>
        <Carousel></Carousel>
        <div className="row">
        {cakeData.length === 0
          ? cakeData.map((cake, index) => {
              return <Cake data={cake} key={index} />;
            })
          : cakeData.map((cake, index) => {
              return <Cake data={cake} key={index} />;
            })}
        </div>
      </div>
    </div>
    )
}

export default Home