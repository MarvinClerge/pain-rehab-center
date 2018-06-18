import React, { Component } from 'react'
import { Container, Grid, Image } from 'semantic-ui-react'

class Review extends Component {
  state = {
    currentReview: 0,
    reviewData: [
      {
        name: 'Miya C.',
        image: 'https://s3-media2.fl.yelpcdn.com/photo/00Z1jdFIhyOnPDtbZF1ogA/120s.jpg',
        content: 'After my accident Dr.Clergy and his staff took really good care of me. I highly recommend his practice to all of my family and friends who are in need of rehabilitation...'
      },{
        name: 'Eric W.',
        image: 'https://s3-media2.fl.yelpcdn.com/photo/TyhKiVyhmLCYleKMSf_yPQ/120s.jpg',
        content: "The staff at the Pain and Rehab center are absolutely top-notch. I can't say enough good things about my experience with their professional massage therapist, KeJuan."
      },{
        name: 'Dibo H.',
        image: 'https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png',
        content: "Dr. Clerge and his staff were very professional, friendly, and prompt with the services I received. I've been going to Dr.Clerge for years to get DOT examinations and I know I'm in good hands."
      },{
        name: 'Toni S.',
        image: 'https://s3-media4.fl.yelpcdn.com/photo/jjWGU9G9fTY8EPn0hV0joQ/120s.jpg',
        content: 'The staff is friendly, competent and caring. My massage therapist KeJuan was everything that I needed him to be. '
      },{
        name: 'Jakiya T.',
        image: 'https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png',
        content: "The service and staff at the Pain and Rehab Center is unparalleled. The best part is my wait wasn't longer than 10 Minutes, I had an appointment and I was seen promptly."
      }
    ]
  }

  componentDidMount(){
    const component = this

    this.interval = setInterval(function(){
      // loop counter through each review
      if (component.state.currentReview >= component.state.reviewData.length - 1) {
        component.setState({
          currentReview: 0
        })
      } else {
        component.setState({
          currentReview: ++component.state.currentReview
        })
      }
    },10000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }


  render(){
    const review = this.state.reviewData[this.state.currentReview]
    
    return(
      <Container className='review-container'>
        <Grid columns={2} className='review'>
          <Grid.Column textAlign='right' width={6}>
            <Image src={review.image} alt="profile image" circular size='small' floated='right' bordered/>
          </Grid.Column>

          <Grid.Column textAlign='left' width={6}>
            <h4>{review.name}</h4>
            <p>{review.content}</p>
          </Grid.Column>
        </Grid>
        
      </Container>
    )
  }
}

export default Review