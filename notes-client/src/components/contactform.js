import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: "",
      title: "",
      content: "",
    }
  }

  render(){
    return(
      <div>
        <form>
          <label htmlFor="email"><b>Email:</b> </label>
          <input
            type="text"
            name="email"
            // value={this.state.title}
            // onChange={(event) => this.handleChange(event)}
          />

          <br />

          <label htmlFor="title"><b>Title:</b> </label>
          <input
            type="textfield"
            name="title"
            // value={this.state.title}
            // onChange={(event) => this.handleChange(event)}
          />
          <input type="submit" />
        </form>
      </div>

    )}


}

export default ContactForm
