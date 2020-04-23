import React from 'react'
import axios from 'axios'
import {Container, Divider, Segment} from "semantic-ui-react";
import ProductList from '../components/Index/ProductList'
import baseUrl from "../utils/baseUrl";

function Home( {products} ) {
   return (
       <>
        <Segment
           textAlign='center'
           style={{ minHeight: 400, padding: '1em 0em'}}
           vertical>
            <Container text>
                <Divider horizontal><h2>About Us</h2></Divider>
                <h3>
                Our crowns are made from fresh flowers especially for you.
                </h3>
                <h3>
                Would fit best for your birthday, bachelorette party or any other special day of yours.
                </h3>
                <Divider/>
            </Container>
        </Segment>
       <ProductList products={products} />
       </>);
}

Home.getInitialProps = async () => {
  const url = `${baseUrl}/api/products`;
  const response = await axios.get(url);
  return { products : response.data };
};

export default Home
