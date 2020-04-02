import {Button, Segment, Divider} from "semantic-ui-react";
import React from "react";

function CartSummary() {
  return (
      <>
        <Divider/>
        <Segment clearing size="large">
          <strong>Sub total:</strong> $0.00
          <Button icon={"cart"} color={"teal"} floated={"right"} content={"Checkout"}/>
        </Segment>
      </>
  )
}

export default CartSummary;
