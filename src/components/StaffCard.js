import React from "react"
import { Card, Image } from 'semantic-ui-react'


const staffCard = (props) => {

  return (
    <Card>
      <Image src='https://images.gr-assets.com/authors/1494739839p8/14246142.jpg' />
      <Card.Content>

        <Card.Header>
          Dr. Nesly Clerge
        </Card.Header>

        <Card.Description>
          Chiropractor <br/>
          NRCME Examiner
        </Card.Description>

      </Card.Content>
    </Card>
  )

}

export default staffCard
