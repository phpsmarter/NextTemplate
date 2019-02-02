import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Row ,Col } from 'reactstrap';
import Layout from '../components/Layout';
export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps() {

    // Make request for posts.
    const response = await axios.get( 'https://dog.ceo/api/breeds/image/random')
    console.log(response);
    // Return response to posts object in props.
    return {
      message: response.data.message
    }
  }

  render() {
    //console.log(this.props);
    return (
      <Layout>
      <Row className="mt-5">
     <Col sm="4">   
      <Card body>
        <CardImg top width="20%" src={`${this.props.message}`}  alt="Dog" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Col> 

      <Col sm="4">   
      <Card body>
        <CardImg top width="20%" src={`${this.props.message}`}  alt="Dog" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Col> 

      <Col sm="4">   
      <Card body>
        <CardImg top width="20%" src={`${this.props.message}`}  alt="Dog" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Col> 
      </Row> 
      </Layout>
    )
  }
}