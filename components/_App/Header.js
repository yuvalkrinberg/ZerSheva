import { Menu, Container, Image, Icon, Segment } from "semantic-ui-react";
import React from "react";
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Header() {

  const user=true;
  const router = useRouter();

  function isActive(route) {
    return route === router.pathname;
  }
  return (
      //<Segment ui inverted vertical centered aligned style={{minHeight: "350px"}}>
      <Segment
          textAlign='center'
          id={"menu"}
      >
        <Menu fluid stackable pointiong borderless style={{backgroundColor: '#fff'}}>
          <Container text>
            <Link href="/">
              <Menu.Item header active={isActive("/")}>
                <Image
                    size="mini"
                    src="/static/logo.svg"
                    style={{ marginRight: '1em' }}
                />
                Flower Shop
              </Menu.Item>
            </Link>

            <Link href="/cart">
              <Menu.Item header active={isActive("/cart")}>
                <Icon
                    name={"cart"}
                    size={"large"}
                />
                My Cart
              </Menu.Item>
            </Link>

            {user &&
            <Link href="/create">
              <Menu.Item header active={isActive("/create")}>
                <Icon
                    name={"add square"}
                    size={"large"}
                />
                Create
              </Menu.Item>
            </Link>
            }

          </Container>
        </Menu>
            <div>
              <h1 className={"banner-text"}>Zer Sheva</h1>
              <h3 className={"banner-text1"}>Flower crowns.</h3>
            </div>
      </Segment>
  );
}

export default Header;
