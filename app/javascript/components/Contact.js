import React from "react"

class Contact extends React.Component {
  render () {
    return (
      <div className="contact-div" name="contact" id="contact">
        <h2>Let's Chat!</h2>
        <hr className="col-sm-4"/>
        <p>Fill out the form and send me a message or email me at <a href="mailto:justgarcia5@gmail.com" >justgarcia5@gmail.com</a>.</p>
        <form className="from-group">
          <label>
            <p className="label-txt">ENTER YOUR EMAIL</p>
            <input type="text" className="input" />
            <div className="line-box">
              <div className="line"></div>
            </div>
          </label>
          <br/>
          <label>
            <p className="label-txt">ENTER YOUR MESSAGE</p>
            <input type="text" className="input" />
            <div className="line-box">
              <div className="line"></div>
            </div>
          </label>
          <br/>
          <button className="mt-5" type="submit">SUBMIT</button>
        </form>
        <footer>
          <p><a href="mailto:justgarcia5@gmail.com">Justin Garcia</a> | Los Angeles, Ca</p>
          <p><a href="admins/sign_in" >Admin</a></p>
        </footer>
      </div>
    );
  }
}

export default Contact
