import { useState } from "react";
import axios from "axios";

function Login() {
  //   var [errorMessage, setErrorMess] = useState();
  var [enteredText, setEnteredText] = useState();
  let user = {};
  let register = {};

  var login = function (e) {
    console.log("User has entered login page", user.email);
    if (user.email === undefined && user.password === undefined) {
      //setErrorMess("login failure");
      alert("login failure");
    }
    //console.log('Ssssssssssssssssssss',user)
    axios
      .post(`https://apifromashu.herokuapp.com/api/login`, user)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        localStorage.setItem("Data", res['data'].token);
        setEnteredText("");
      });
  };

  var handleEmail = function (e) {
    user.email = e.target.value;
  };
  var handlePassword = function (e) {
    user.password = e.target.value;
  };
  var registerName = function (e) {
    register.name = e.target.value;
  };
  var registerPassword = function (e) {
    register.password = e.target.value;
  };
  var registerEmail = function (e) {
    register.email = e.target.value;
  };

  var registerData = function (e) {
    if (
      register.email === undefined ||
      register.password === undefined ||
      register.name === undefined
    ) {
      alert("please provide details");
    } else {
      axios
        .post(`https://apifromashu.herokuapp.com/api/register`, register)
        .then((res) => {
          console.log(res);
          console.log(res.data);
          setEnteredText("");
        });
    }
  };
  return (
    <div class="row mb-5">
      <div class="col-md-8 offset-md-4">
        <form className="w-50 ">
          <h1 className="alignCenter">Login Page</h1>
          <div class="form-group justify-content-start">
            <label className="mb-0" for="exampleInputEmail1">
              Email address
            </label>
            <input
              value={enteredText}
              onChange={handleEmail}
              className="form-control mb-2"
              type="email"
              name=""
              placeholder="Enter Email"
            ></input>
            <label className="mb-0" for="exampleInputEmail1">
              Password
            </label>
            <input
              value={enteredText}
              onChange={handlePassword}
              className="form-control mb-2"
              type="password"
              name=""
              placeholder="Enter Password"
            ></input>

            <button
              className="btn btn-outline-primary form-control mt-2"
              onClick={login}
              type="button"
            >
              Login
            </button>
            {/* {errorMessage} */}
          </div>
        </form>
      </div>

      <div class="col-md-8 offset-md-4">
        <form className="w-50">
          <h1 className="alignCenter">Sign Up Page</h1>
          <label className="mb-0" for="exampleInputEmail1">
            Name
          </label>
          <input
            value={enteredText}
            onChange={registerName}
            className="form-control mb-2"
            type="name"
            name=""
            placeholder="Enter Name"
          ></input>
          <label className="mb-0" for="exampleInputEmail1">
            {" "}
            Email
          </label>
          <input
            value={enteredText}
            onChange={registerEmail}
            className="form-control mb-2"
            type="name"
            name=""
            placeholder="Enter Email"
          ></input>
          <label className="mb-0" for="exampleInputEmail1">
            {" "}
            Password
          </label>
          <input
            value={enteredText}
            onChange={registerPassword}
            className="form-control mb-2"
            type="password"
            name=""
            placeholder="Enter Password"
          ></input>
          <button
            onClick={registerData}
            className="btn btn-outline-primary form-control mt-2"
            type="button"
          >
            Register
          </button>
          {/* //{errorMessage} */}
        </form>
      </div>
    </div>
  );
}

export default Login;
