import App from "next/app";
import Layout from "../components/_App/Layout"
import React from "react";

class MyApp extends App {

    static async getInitialProps({ Component, ctx }){
        let pageProps=[]

        if (Component.getInitialProps){ // If this function exists for the current component
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

  render() {
    const { Component, pageProps } = this.props; //const Component = this.props.Component
    console.log(this.props);
    return (
        <Layout>
          <Component {...pageProps}/>
        </Layout>
    );
  }
}

export default MyApp;
