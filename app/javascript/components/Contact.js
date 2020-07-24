import React from "react"
import { ReCaptcha } from 'react-recaptcha-google'

import Errors from './Errors'

class Contact extends React.Component {
  state = {
    contact: {
      name: '',
      email: '',
      message: ''
    },
    responseOk: false,
    errors: null,
    onLoadRecaptcha: this.onLoadRecaptcha,
    verifyCallback: this.verifyCallback
  }

  componentDidMount() {
    if (this.captchaDemo) {
        console.log("started, just a second...")
        this.captchaDemo.reset();
        this.captchaDemo.execute();
    }
  }

  onLoadRecaptcha() {
      if (this.captchaDemo) {
          this.captchaDemo.reset();
          this.captchaDemo.execute();
      }
  }

  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!
    console.log(recaptchaToken, "<= your recaptcha token")
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log('contact submitted')
    fetch('/contacts.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ contact: this.state.contact })
    }).then((response) => {
      return response.json().then((json) => {
        // console.log(response, json)
        if(response.status === 201) {
          this.setState({
            errors: null,
            responseOk: true,
            contact: {
              name: '',
              email: '',
              message: ''
            }
          })
        } else {
          this.setState({
            responseOk: false,
            errors: json
          })
        }
        return json
      })
    }).catch((errors) => {
      this.setState({responseOk: false, errors: {"System Error": ["Unknown problem has occurred"]}})
    })
  }

  handleChange = (event) => {
    let { contact } = this.state
    contact[event.target.name] = event.target.value
    this.setState({ contact: contact })
  }

  render () {
    const { contact, responseOk, errors } = this.state
    return (
      <div className="contact-div" name="contact" id="contact">
        <h2>Let's Chat!</h2>
        <p className="contacts" >Fill out the form and send me a message or email me at <a href="mailto:justgarcia5@gmail.com" >justgarcia5@gmail.com</a>.</p>
        <form className="form-group" onSubmit={this.handleSubmit}>
          {responseOk &&
            <div className="container col-sm-12 m-auto">
              <div className="alert alert-success text-center">Message Sent!<br/>Thank you! I will respond as promply as possible.</div>
            </div>
          }
          <Errors errors={errors} />
          <label>
            <p className="label-txt p-2">ENTER YOUR NAME</p>
            <input type="text form-control" className="input" name="name" onChange={this.handleChange} value={contact.name}/>
            <div className="line-box">
              <div className="line"></div>
            </div>
          </label>
          <br/>
          <label>
            <p className="label-txt p-2">ENTER YOUR EMAIL</p>
            <input type="text" className="input" name="email" onChange={this.handleChange} value={contact.email}/>
            <div className="line-box">
              <div className="line"></div>
            </div>
          </label>
          <br/>
          <label>
            <p className="label-txt p-2">ENTER YOUR MESSAGE</p>
            <textarea type="text" className="input" name="message" onChange={this.handleChange} value={contact.message}/>
            <div className="line-box">
              <div className="line"></div>
            </div>
          </label>
          <br/>
          {/* <ReCaptcha
            className="g-recaptcha"
            render="explicit"
            elementId="recaptcha"
            type="audio"
            onloadCallback={this.onLoadRecaptcha}
            verifyCallback={this.verifyCallback}
          /> */}
          <br/>
          <button className="submit-btn mt-5" type="submit">SUBMIT</button>
        </form>
        <footer>
          <div className="icons d-flex justify-content-center">
            <a href="https://www.facebook.com/justin.garcia.378199" className='text-decoration-none icon-foot p-2' target="_blank"><i className="fa fa-facebook"></i></a>
            <a href="https://twitter.com/Justgarcia85" className='text-decoration-none icon-foot p-2' target="_blank"><i className="fa fa-twitter"></i></a>
            <a href="https://github.com/justgarcia5" className='text-decoration-none icon-foot p-2' target="_blank"><i className="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/just-g-garcia/" className='text-decoration-none icon-foot p-2' target="_blank"><i className="fa fa-linkedin"></i></a>
            <a href="mailto:justgarcia5@gmail.com" className='text-decoration-none icon-foot p-2' target="_blank"><i className="fa fa-envelope"></i></a>
          </div>
          <br/>
          <p><a href="mailto:justgarcia5@gmail.com">Justin Garcia</a> © 2020 | Culver City, Ca</p>
          <a className="admin-link" href="admins/sign_in" >Admin</a>
        </footer>
      </div>
    );
  }
}

export default Contact
