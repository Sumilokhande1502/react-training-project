function Login(){
    let user = {};
    var login = function(){
    console.log("User has entered login page", user);
}

var handleEmail = function(e){
    console.log("User has entered password");
    user.email = e.target.value;
}
var handlePassword = function(e){
    console.log("User has entered password");
    user.password = e.target.value;
}

return(
    <div>
        <h1>Login Page</h1>
            <input onChange={handleEmail} className="form-control" type="email" name=""></input>
            <input onChange={handlePassword} className="form-control" type="password" name=""></input>
            <button onClick={login} className="form-control" type="submit">Login</button>
    </div>
)
}

export default Login