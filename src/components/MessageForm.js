import React from "react"
import { Container, Divider, Button, Form, Input, TextArea } from 'semantic-ui-react'

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
    console.log(this.state.name)
    return (
      <Container className='message-container' textAlign='center'>
        <Divider hidden />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Field onChange={this.handleChange} control={Input} label='Full Name' value={this.state.name } id="name" placeholder='Full Name' required="true"/>
            <Form.Field onChange={this.handleChange} control={Input} label='Phone Number' value={this.state.phoneNumber } id="phoneNumber" placeholder='Phone Number' required="true" type="number"/>
            <Form.Field onChange={this.handleChange} control={Input} label='Email' value={this.state.email } id="email" placeholder='Email' required="true" type="email"/>
          </Form.Group>

          <Form.Field onChange={this.handleChange} control={TextArea} label='Message' value={this.state.message } id="message" placeholder='How can we help?' required="true" maxLength="300"/>
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
      </Container>
    )
  }


}

export default MessageForm
