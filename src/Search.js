import cakesdata from "./Cakesdata";
import { useState, useEffect } from "react";
import Cake from "./Cake";

function Search() {
  const [search, setSearchValue] = useState("");
  const [cakeData, setCakeData] = useState(cakesdata);

  let searchFunction = (event) => {
    setSearchValue(event.target.value);
  };

  let cakeArray = cakesdata;

  let handleSearch = () => {
      if(search !== ''){
          cakeArray = cakesdata.filter((each) => {
            return each.name.toString() === search.toString();
          });
        }else{
            cakeArray=cakesdata;
        }
    setCakeData(cakeArray);

  };
  useEffect(() => {}, []);

  return (
    <div className="container-fluid mt-3">
      <div className="row w-100 justify-content-end">
        <form className="form-inline my-2 my-lg-0">
          <input
            onChange={searchFunction}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            
          />
          <button
            onClick={handleSearch}
            className="btn btn-success my-2 my-sm-0"
            type="button"
          >
            Search
          </button>
        </form>
      </div>
      <div className="row w-100 justify-content-center">
        {cakeData.length === 0 ? 
            cakeData.map((cake, index) => {
                return <Cake data={cake} key={index} />;
                })
            : cakeData.map((cake, index) => {
                return <Cake data={cake} key={index} />;
                })}
        {/* {filteredCake.length === 0
                ? cakesdata.map((cake, index) => {
                    return <Cake data={cake} key={index} />;
                    })
                : filteredCake.map((cake, index) => {
                    return <Cake data={cake} key={index} />;
                    })} */}
      </div>
    </div>
  );
}

export default Search;
