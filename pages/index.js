import React from 'react'
import axios from 'axios'
import {Container, Divider, Segment} from "semantic-ui-react";
import ProductList from '../components/Index/ProductList'
import baseUrl from "../utils/baseUrl";

function Home( {products} ) {
   return (
       <>
          <h2 className="about-us">About us</h2>
          <hr />
          <p className="about-us1">
            Our flower crowns are made to make you or your beloved ones happy! <br />
            Will feet you best for a birthday party, a holiday, or any other occasion. <br />
            Just choose the one you love!</p>
          <ProductList products={products} />
       </>);
}

Home.getInitialProps = async () => {
  const url = `${baseUrl}/api/products`;
  const response = await axios.get(url);
  return { products : response.data };
};

export default Home
