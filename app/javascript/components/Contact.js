import React from "react"

import Errors from './Errors'

class Contact extends React.Component {
  state = {
    contact: {
      name: '',
      email: '',
      message: ''
    },
    responseOk: false,
    errors: null
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
        if(response.status === 200 && !Array.isArray(json.email)) {
          this.setState({
            responseOk: true,
            errors: null,
            contact: {
              name: '',
              email: '',
              message: ''
            } })
        } else if(Array.isArray(json.email)) {
          this.setState({
            responseOk: false,
            errors: json
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
    // console.log(errors, responseOk)
    return (
      <div className="contact-div" name="contact" id="contact">
        <h2>Let's Chat!</h2>
        <p className="contacts" >Fill out the form and send me a message or email me at <a href="mailto:justgarcia5@gmail.com" >justgarcia5@gmail.com</a>.</p>
        <form className="from-group" onSubmit={this.handleSubmit}>
          {responseOk &&
            <div className="container col-sm-12 m-auto">
              <div className="alert alert-success text-center">Message Sent!<br/>Thank you! I will respond as promply as possible.</div>
            </div>
          }
          {/* <Errors errors={errors} /> */}
          <label>
            <p className="label-txt">ENTER YOUR NAME</p>
            <input type="text form-control" className="input" name="name" onChange={this.handleChange} value={contact.name}/>
            <div className="line-box">
              <div className="line"></div>
            </div>
          </label>
          <br/>
          <label>
            <p className="label-txt">ENTER YOUR EMAIL</p>
            <input type="text" className="input" name="email" onChange={this.handleChange} value={contact.email}/>
            <div className="line-box">
              <div className="line"></div>
            </div>
          </label>
          <br/>
          <label>
            <p className="label-txt">ENTER YOUR MESSAGE</p>
            <textarea type="text" className="input" name="message" onChange={this.handleChange} value={contact.message}/>
            <div className="line-box">
              <div className="line"></div>
            </div>
          </label>
          <br/>
          <button className="submit-btn mt-5" type="submit">SUBMIT</button>
        </form>
        <footer>
          <p><a href="mailto:justgarcia5@gmail.com">Justin Garcia</a> | Culver City, Ca</p>
          <p><a href="admins/sign_in" >Admin</a></p>
        </footer>
      </div>
    );
  }
}

export default Contact
