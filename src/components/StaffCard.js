import React from "react"
import { Card, Image, Grid } from 'semantic-ui-react'


const staffCard = (props) => {
  // console.log(props)
  if (props.staffData){
    return (
      <Grid.Column>
        <Card onClick={handleClick}>
          <Image src="https://images.gr-assets.com/authors/1494739839p8/14246142.jpg" />
          <Card.Content>

            <Card.Header>
              {props.staffData.name}
            </Card.Header>

            <Card.Description>
              {props.staffData.title} <br/>
            </Card.Description>

          </Card.Content>
        </Card>
      </Grid.Column >
    )
  }
}

const handleClick = (e) => {
  console.log("do something with me")
}

export default staffCard
