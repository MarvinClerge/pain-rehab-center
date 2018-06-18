import React from 'react'
import { Button, Container, Divider } from 'semantic-ui-react'

const Welcome = props => {
  return(
    <Container textAlign='center'>
      <Container>
        <p>Thank you for visiting the Pain & Rehab Center’s website.</p>
        <p>The leading health professionals at our facility are dedicated to helping you achieve a pain free life.</p>
        <p>We specialize in the treatment of accident related injuries and work related injuries.</p>
      </Container>

      <Divider section hidden />
      
      <Button color='orange'>REQUEST APPOINTMENT</Button>
    </Container>
  )
}

export default Welcome