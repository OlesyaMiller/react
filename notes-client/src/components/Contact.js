//this is just a presentational component. "dumb"

import React from 'react';
import ContactForm from './contactform'

const Contact = () => {
  return(
    <div className="contact">
      <p>Questions or comments?</p>
      < ContactForm />
    </div>
  )
}

export default Contact;
