import React from "react"

// rotating team , staff card,  rot loc container, loc card , message form



class MessageForm extends React.Component {
  state = {
    name: "",
    phoneNumber: "",
    email: "",
    message: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // do something with current state and send it somewhere
    // lift state to change component rendered to say thank you we will get back to you soon!
    console.log("FORM SUBMITTED")
  }

  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label><br/>
        <input type="text" onChange={this.handleChange} value={this.state.name} id="name" required="true"/>
        <br/>

        <label htmlFor="phoneNumber">Phone Number:</label><br/>
        <input type="number" onChange={this.handleChange} value={this.state.phoneNumber} id="phoneNumber" required="true"/>
        <br/>

        <label htmlFor="email">Email:</label><br/>
        <input type="email" onChange={this.handleChange} value={this.state.email} id="email" required="true"/>
        <br/>

        <label htmlFor="message">Message:</label><br/>
        <textarea type="text" onChange={this.handleChange} value={this.state.message} id="message" maxLength="300" required="true"/>
        <br/>

        <input type="submit" value="Submit"/>
      </form>
    )
  }


}

export default MessageForm
