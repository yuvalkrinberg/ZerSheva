import {Header, Segment, Button, Icon} from "semantic-ui-react";
import React from "react";

function CartItemList() {
  const user = false;

  return (
      <Segment secondary color={"green"} inverted textAlign={"center"} placeholder>
        <Header icon>
          <Icon name={"shopping basket"}/>
          No products in your cart.
        </Header>
        <div>
          {user ? (
              <Button color={"orange"}>View Products</Button>
          ) : (
              <Button color={"blue"}>Login to see your products</Button>
          )}
        </div>
      </Segment>
  )
}

export default CartItemList;
