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

            {/* links to id's are refering to pages that would be used */}
            <List.Item className='nav-link'>
              <a href="#home">Home</a>
            </List.Item>

            <List.Item className='nav-link'>
              <a href="#about">About Us</a>
            </List.Item>

            <List.Item className='nav-link'>
              <a href="#locations">Locations</a>
            </List.Item>

            <List.Item className='nav-link'>
              <a href="#services">Services</a>
              <div>
                <p><a href='#physical'>Physical Therapy</a></p>
                <p><a href='#chiro'>Chiropractic Care</a></p>
                <p><a href='#message'>Message Therapy</a></p>
              </div>
            </List.Item>

            <List.Item className='nav-link'>
              <a href="#learn">Learn More</a>
              <div>
                <p><a href='#work'>Work Injury</a></p>
                <p><a href='#accident'>Accident Injury</a></p>
                <p><a href='#personal'>Personal Injury</a></p>
                <p><a href='#benefits'>Benefits of Therapy</a></p>
                <p><a href='#degree'>Chiropractic Degree</a></p>
                <p><a href='#examiner'>DOT Medical Examiner</a></p>
              </div>
            </List.Item>

            <List.Item className='nav-link'>
              <a href="#visit">Your Visit</a>
              <div>
                <p><a href='#forms'>Patient Forms</a></p>
                <p><a href='#insurance'>Insurance</a></p>
                <p><a href='#referral'>Referral</a></p>
              </div>
            </List.Item>
            
          </List>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default Nav