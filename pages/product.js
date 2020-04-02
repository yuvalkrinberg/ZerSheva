import axios from 'axios'
import ProductSummary from "../components/Product/ProductSummary";
import ProductAttributes from '../components/Product/ProductAttributes'
import React from "react";
import baseUrl from "../utils/baseUrl";

function Product({ product }) {

  return (
      <>
        <ProductSummary {...product} />
        <ProductAttributes {...product} />
      </>

  )
}
//ctx includes property called query which includes the query string- and inside the item _id we passed
Product.getInitialProps = async ({ query: { _id } }) => {
  const url= `${baseUrl}/api/product`;
  const payload = { params: { _id }}
  const response = await axios.get(url, payload) // equivalent to http://localhost:3000/api/product/_id
  return {product: response.data}
};

export default Product;
