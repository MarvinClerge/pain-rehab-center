import React from 'react'
import { Container, Divider, Grid } from 'semantic-ui-react'

const Services = props => {
  return(
    <Container className='services-container' textAlign='center'>
      <h2>Services</h2>
      
      <Divider hidden />
      
      <Grid columns={3}>
        <Grid.Column>
          <h3>Chiropractic care</h3>
          <p>
            We provide chiropractic care for patients who are injured in motor vehicle accidents. 
            Late evening and weekend hours are available.
          </p>
        </Grid.Column>

        <Grid.Column>
          <h3>Physical Therapy</h3>
          <p>
            Physical therapy is available for patients who are injured in motor vehicle accidents. 
            Late evening and weekend hours are available.
          </p>
        </Grid.Column>

        <Grid.Column>
          <h3>Message Therapy</h3>
          <p>
            We provide massage therapy for patients who are injured in motor vehicle accidents. 
            Late evening and weekend hours are available. 
            Licensed massage therapists are on staff.
          </p>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default Services