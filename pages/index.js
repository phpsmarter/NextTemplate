import React ,{Fragment}from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout';
import { Jumbotron, Button,Alert } from 'reactstrap';
// const Title = styled.h1`
//   display:flex;
//   justify-content:center;
//   align-items:center;
//   margin:50px auto!important;
//   text-align:center;
//   color: red;
//   font-size: 50px;
// `


export default () => {
   return ( 
   <Layout>
       <Fragment>

       <Jumbotron className="mt-5">
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>

        {[
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'dark',
        ].map((variant, idx) => (
          <Alert key={idx} color={variant} >
            This is a {variant} alert—check it out!
          </Alert>
        ))}
       </Fragment>
   </Layout>
   )
}
