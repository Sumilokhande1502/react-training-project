import { Carousel } from "./Carousel";
//import Search from "./Search";
// import Cake from "./Cake";
// import { useState, useEffect } from "react";
// import cakesdata from "./Cakesdata";

let Home = () => {
  // let [searchtext, setSearchtext] = useState("");
  // const [cakeData, setCakeData] = useState(cakesdata);
  // let cakeArray = cakesdata;
  // let function1 = function (searchstring) {
  //   setSearchtext(searchstring);

  //   if (searchstring !== "") {
  //     const cakeArray = cakesdata.filter((el) =>
  //       el.name.toLowerCase().includes(searchstring)
  //     );
  //     console.log(cakeArray);
  //     setCakeData(cakeArray);
  //     setSearchtext("");
  //     return { cakeArray };
  //   } else {
  //     cakeArray = cakesdata;
  //     setCakeData(cakeArray);
  //     setSearchtext("");
  //     return { cakeArray };
  //   }
  // };
  // useEffect(() => {}, []);

  return (
    <div className="container-fluid">
        
        <Carousel></Carousel>
        {/* <div className="row">
          {cakeData.length === 0
            ? cakeData.map((cake, index) => {
                return <Cake data={cake} key={index} />;
              })
            : cakeData.map((cake, index) => {
                return <Cake data={cake} key={index} />;
              })}
        </div> */}
    </div>
  );
};

export default Home;
