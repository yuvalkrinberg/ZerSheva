import { Menu, Container, Image, Icon, Segment } from "semantic-ui-react";
import React from "react";
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Header() {

  const user=false;
  const router = useRouter();

  function isActive(route) {
    return route === router.pathname;
  }
  return (
      //<Segment ui inverted vertical centered aligned style={{minHeight: "350px"}}>
      <Menu fluid id={"menu"} stackable inverted >
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

          {user ? (<>
          <Link href="/account">
            <Menu.Item header active={isActive("/account")}>
              <Icon
                  name={"heart outline"}
                  size={"large"}
              />
              My Account
            </Menu.Item>
          </Link>

            <Menu.Item header>
              <Icon
                  name={"sign out"}
                  size={"large"}
              />
              Logout
            </Menu.Item>
              </>)
          :(<>
              <Link href="/login">
                <Menu.Item header active={isActive("/login")}>
                  <Icon
                      name={"sign-in"}
                      size={"large"}
                  />
                  Login
                </Menu.Item>
              </Link>

              <Link href="/signup">
                <Menu.Item header active={isActive("/signup")}>
                  <Icon
                    name={"signup"}
                    size={"large"}
                  />
                  Signup
                </Menu.Item>
              </Link>
            </>)
          }

        </Container>
      </Menu>
  );
}

export default Header;
