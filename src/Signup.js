
import { useState } from "react";
import axios from "axios";

function Signup(props) {
    var [enteredText, setEnteredText] = useState();

  let register = {};
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
          props.history.push("/login")
          setEnteredText("");
        });
    }
  };

  return (
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
  );
}

export default Signup;
