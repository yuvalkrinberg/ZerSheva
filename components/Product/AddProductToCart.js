import {Input} from 'semantic-ui-react'
import React from "react";

function AddProductToCart() {
  return <Input
      action={{
          color: 'green',
          content: "add to Cart",
          icon: "plus cart"
      }}
      type="number"
      min="1"
      placeholder={"Quantity"}
  />
}

export default AddProductToCart;
