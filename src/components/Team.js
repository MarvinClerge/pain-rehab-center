import React from "react"
import StaffCard from "./StaffCard"
import { Container, Divider, Grid, Button } from 'semantic-ui-react'


class Team extends React.Component {
  state = {
    currentStaff: [0,1,2,3],
    staffData: [
      {
        name: "Dr. Nesly Clerge",
        title: "Chiropractor",
        img: "https://images.gr-assets.com/authors/1494739839p8/14246142.jpg"
      },{
        name: "Dr. Heon Jang",
        title: "Physical Therapy Practitioner",
        img: "http://nebula.wsimg.com/381f133ac55fcf5b9617b7a1f88c41f0?AccessKeyId=E9238EEEC661852D6760&disposition=0&alloworigin=1"
      },{
        name: "Liliana Sadikaj",
        title: "Licensed Massage Therapist",
        img: "http://nebula.wsimg.com/ee822a17fa80468f85ba592d725913bc?AccessKeyId=E9238EEEC661852D6760&disposition=0&alloworigin=1"
      },{
        name: "Tanisha King",
        title: "Licensed Massage Therapist",
        img: "http://nebula.wsimg.com/56a8f0055123415cad13a27003571de1?AccessKeyId=E9238EEEC661852D6760&disposition=0&alloworigin=1"
      },{
        name: "Tierra Guy",
        title: "Clinic Director",
        img: "http://nebula.wsimg.com/c593d476d4b56139d2eb4a1c1338627d?AccessKeyId=E9238EEEC661852D6760&disposition=0&alloworigin=1"
      },{
        name: "Alisa Fraizier",
        title: "Office Manager",
        img: "http://nebula.wsimg.com/117cec50c2320e172f021ab0b7151f91?AccessKeyId=E9238EEEC661852D6760&disposition=0&alloworigin=1"
      },{
        name: "Teyarna Lewis",
        title: "Chiropractic Assistant",
        img: "http://nebula.wsimg.com/dd175fb91e8398c66d02f2ec42eb92da?AccessKeyId=E9238EEEC661852D6760&disposition=0&alloworigin=1"
      },{
        name: "Kayla Johnson",
        title: "Chiropractic Assistant",
        img: "http://nebula.wsimg.com/70bc9c92fe96337ba8947ccf86b8d137?AccessKeyId=E9238EEEC661852D6760&disposition=0&alloworigin=1"
      },{
        name: "Rosetta Ellis",
        title: "Chiropractic Assistant",
        img: "http://nebula.wsimg.com/bb6a4e1964a37b5a81e1e6b662c98817?AccessKeyId=E9238EEEC661852D6760&disposition=0&alloworigin=1"
      },{
        name: "Deana Reed",
        title: "Chiropractic Assistant",
        img: "http://nebula.wsimg.com/67e47de5cd3b83954e3decdb62f9d049?AccessKeyId=E9238EEEC661852D6760&disposition=0&alloworigin=1"
      }
    ]
  }


  componentDidMount = () => {
    this.interval = setInterval(this.handleStaffTransition,10000)
  }

  componentWillUnmount = () => {
    clearInterval(this.interval)
  }

  createStaffCards = () => {
    return this.state.currentStaff.map((cs)=>{
      return (<StaffCard staffData={this.state.staffData[cs]} />)
    })
  }

  render = () => {
    return (
      <Container className='staff-container' textAlign='center'>
        <Divider hidden />
        <Grid columns={4}>
          {this.createStaffCards()}
          <Button onClick={this.handleStaffTransition} icon='right chevron'/>
        </Grid>
      </Container>
    )
  }

  handleStaffTransition = () => {
    const component = this
    switch (9){

      case component.state.currentStaff[3]:
        component.setState({
          currentStaff: [
            component.state.currentStaff[0] + 1,
            component.state.currentStaff[1] + 1,
            component.state.currentStaff[2] + 1,
            0
          ]
        })
        break;

      case component.state.currentStaff[2]:
        component.setState({
          currentStaff: [
            component.state.currentStaff[0] + 1,
            component.state.currentStaff[1] + 1,
            0,
            component.state.currentStaff[3] + 1
          ]
        })
        break;

      case component.state.currentStaff[1]:
        component.setState({
          currentStaff: [
            component.state.currentStaff[0] + 1,
            0,
            component.state.currentStaff[2] + 1,
            component.state.currentStaff[3] + 1
          ]
        })
        break;

      case component.state.currentStaff[0]:
        component.setState({
          currentStaff: [
            0,
            component.state.currentStaff[1] + 1,
            component.state.currentStaff[2] + 1,
            component.state.currentStaff[3] + 1
          ]
        })
        break;

      default:
        component.setState({
         currentStaff: [
           component.state.currentStaff[0] + 1,
           component.state.currentStaff[1] + 1,
           component.state.currentStaff[2] + 1,
           component.state.currentStaff[3] + 1
         ]
       })
    }
  }


}

export default Team
