import "./App.css";
import Loader from "react-loader-spinner";
import Navbar from "./Navbar";
import Fileupload from './Fileupload';
import { Carousel } from "./Carousel";
import Login from "./Login";
//import Search from "./Search";
import Cake from "./Cake";
import { useState, useEffect } from "react";
import cakesdata from "./Cakesdata";

function App() {
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
    }
  };
  useEffect(() => {}, []);

  

  return (
    <div className="App">
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      <Navbar fun={function1} />
      <Fileupload />
      {/* <Login /> */}
      <Carousel />
       {/* <Search searchquery={searchtext} /> */}
      <div className="row w-100 justify-content-center">
        {cakeData.length === 0
          ? cakeData.map((cake, index) => {
              return <Cake data={cake} key={index} />;
            })
          : cakeData.map((cake, index) => {
              return <Cake data={cake} key={index} />;
            })}
      </div>
      <Login />
    </div>
  );
}

export default App;
