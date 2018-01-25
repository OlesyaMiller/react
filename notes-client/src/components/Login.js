import React, { Component } from 'react';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: "",
    }
  }


  render(){
    return(
      <div>
        <form>
          <label htmlFor="username"><b>Username:</b> </label>
            <input
              type="text"
              name="username"
              value={this.state.username}
            />

          < br />
          < br />

          <label htmlFor="password"><b>Password:</b> </label>
          <input
            type="text"
            name="password"
            value={this.state.password}
          />

          < br />
          < br />

          <button className="loginButton"> Login </button>

          < br />
          < br />
        </form>
      </div>
  )}

}

export default Login;
