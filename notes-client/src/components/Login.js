import React, { Component } from 'react';



class Login extends Component {
  
  render(){
    return(
      <div>
        <form>
          <label htmlFor="username"><b>Username:</b> </label>
            <input
              type="text"
              name="username"
            />

          < br />
          < br />

        <label htmlFor="password"><b>Password:</b> </label>
        <input
          type="text"
          name="password"
        />

          < br />
          < br />

        <button className="loginButton"> Login </button>
      </form>
    </div>
    )}

}

export default Login;
