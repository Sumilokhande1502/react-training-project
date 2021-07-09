function Navbar(props) {
  let searchText;
  let handleSearchText = (e) => {
    searchText = e.target.value;
  };
  let search = () => {
    props.fun(searchText);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            onChange={handleSearchText}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value= {searchText}
          ></input>
          <button
            onClick={search}
            className="btn btn-outline-success my-2 my-sm-0 mr-2"
            type="button"
          >
            Search
          </button>
        </form>
        <div className="form-inline my-2 my-lg-0">
          {true && (
            <button className="btn btn-primary my-2 my-sm-0 mr-2" type="button">
              Login
            </button>
          )}
          {false && (
            <button className="btn btn-danger my-2 my-sm-0" type="button">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
