import querystring from 'query-string';
import {useEffect} from 'react'

function Search(props) {
  // const [search, setSearchValue] = useState("");
  // const [cakeData, setCakeData] = useState(cakesdata);

  // let searchFunction = (event) => {
  //   setSearchValue(event.target.value);
  // };

  // let cakeArray = cakesdata;

  // let handleSearch = () => {
  //   if (search !== "") {
  //     const cakeArray = cakesdata.filter((el) =>
  //       el.name.toLowerCase().includes(search)
  //     );

  //     console.log(cakeArray);
  //     setCakeData(cakeArray);
  //     setSearchValue('')
  //     return { cakeArray };
  //   } else {
  //     cakeArray = cakesdata;
  //     setCakeData(cakeArray);
  //     setSearchValue('')
  //   }
  // };
  // useEffect(() => {}, []);

  let query = querystring.parse(props.location.search);
  console.log("query is: " + query);

  useEffect(() => {
    console.log("query is: " + query);
    let apiurl=process.env.REACT_APP_BASE_API_URL+"/searchcakes?q="+query.q}, [query.q])

  return (
    <div className="container-fluid mt-3">
      <div>
        <p>Search string from app.js {props.searchquery}</p>
      </div>
      {/* <div className="row w-100 justify-content-end">
        <form className="form-inline my-2 my-lg-0">
          <input
            onChange={searchFunction}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
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
}

export default Search;
