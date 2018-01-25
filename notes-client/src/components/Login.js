import React, { Component } from 'react';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: "",
    }
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }


  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="username"><b>Username:</b> </label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={(event) => this.handleChange(event)}
            />

          < br />
          < br />

          <label htmlFor="password"><b>Password:</b> </label>
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={(event) => this.handleChange(event)}
          />

          < br />
          < br />

          <button type="submit" className="loginButton"> Login </button>

          < br />
          < br />
        </form>
      </div>
  )}

}

export default Login;
