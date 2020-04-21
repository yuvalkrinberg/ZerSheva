import {Button, Form, Icon, Segment, Message} from "semantic-ui-react";
import React, { useState }  from "react";
import Link from "next/link";


const INITIAL_USER = {
  name: "",
  email: "",
  password: ""
};

function Signup() {
  const [user, setUser] = useState(INITIAL_USER);

  function handleChange(event){
    const {name, value} = event.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  }

  return (<>
    <Message
      attached
      icon={"settings"}
      header={"Get Started"}
      content={"Create a new account"}
      color={"teal"}
    />
    <Form>
      <Segment>
        <Form.Input
            fluid
            icon={"user"}
            iconPosition={"left"}
            lable={"Name"}
            placeholder={"Name"}
            value={user.name}
            name={"name"}
            onChange={handleChange}
        />
        <Form.Input
            fluid
            icon={"envelope"}
            iconPosition={"left"}
            lable={"Email"}
            placeholder={"Email"}
            value={user.email}
            name={"email"}
            type={"email"}
            onChange={handleChange}
        />
        <Form.Input
            fluid
            icon={"lock"}
            iconPosition={"left"}
            lable={"Password"}
            placeholder={"Password"}
            value={user.password}
            type={"password"}
            name={"password"}
            onChange={handleChange}
        />
        <Button
          icon={"signup"}
          type={"submit"}
          color={"orange"}
          content={"Signup"}
        />
      </Segment>
    </Form>
    <Message attached={"bottom"} warning>
      <Icon name={"help"}/>
      Existing user?
      <Link href={"/login"}>
        <a> Log in here</a>
      </Link>
    </Message>
  </>);
}

export default Signup;
