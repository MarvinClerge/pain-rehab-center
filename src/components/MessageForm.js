import React from "react"





class MessageForm extends React.Component {
  state = {
    name: "",
    phoneNumber: "",
    email: "",
    message: ""
  }

  handleChange = (e) => {

    console.log(e.target)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("nah chill son")
  }

  render = () => {
    return (
      <form>
        <input type="text" onChange={handleChange} value={this.state.name} name="name"/>
        <input type="text" onChange={handleChange} value={this.state.phoneNumber} name="phoneNumber"/>
        <input type="text" onChange={handleChange} value={this.state.email} name="email"/>
        <input type="text" onChange={handleChange} value={this.state.message} name="message"/>
        <input type="submit" onChange={handleSubmit} value="Submit"/>
      </form>;
    )
  }


}

export default MessageForm
