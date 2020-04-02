import { Card } from 'semantic-ui-react'
import React from "react";

function ProductList({ products }) {
  function mapProductsToItems(products) {
    return products.map( product => ({
      header: product.name,
      image: product.mediaUrl,
      meta: `$${product.price}`,
      color: 'olive',
      fluid: true,
      childKey: product._id,
      href: `/product?_id=${product._id}`
    }))
  }
  return <Card.Group stackable itemsPerRow="3" centered items={ mapProductsToItems(products) } />;
}

export default ProductList;
