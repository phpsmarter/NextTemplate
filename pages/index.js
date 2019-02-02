import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout';

const Title = styled.h1`
  display:flex;
  justify-content:center;
  align-items:center;
  margin:50px auto!important;
  text-align:center;
  color: red;
  font-size: 50px;
`

export default () => {
   return ( 
   <Layout>
       <Title>My page</Title>
   </Layout>
   )
}
