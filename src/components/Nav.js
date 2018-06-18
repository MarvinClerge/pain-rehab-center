import React from 'react'
import { Container, Grid, List } from 'semantic-ui-react'

const Nav = props => {

  return(
    <Container className='nav-container'>
      <Grid columns={2}>
        <Grid.Column>
          <p className='nav-title'>Pain & Rehab Center</p>
          <p>2041 Martin Luther King Ave, (202) 610-0260</p>
        </Grid.Column>
        
        <Grid.Column textAlign='right'>
          <List horizontal>
            <List.Item>Home</List.Item>
            <List.Item>About Us</List.Item>
            <List.Item>Locations</List.Item>
            <List.Item>Services</List.Item>
            <List.Item>Learn More</List.Item>
            <List.Item>Your Visit</List.Item>
          </List>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default Nav