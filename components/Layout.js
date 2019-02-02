import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Nav, NavItem,Row } from "reactstrap";
const  searchs=[{title:"React"},{title:"Redux"},{title:"Javascript"},{title:"BootStrap"}]
import NavListItem from "./NavListItem";
class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { children } = this.props;
    const title = "Welcome to Nextjs";
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
          
        </Head>
        <header>
          <Nav className="navbar navbar-dark bg-dark">
            <NavItem>
              <Link href="#">
                <a className="navbar-brand">Home</a>
              </Link>
            </NavItem>
            
            <NavListItem title="React"/>
            <NavListItem title="Redux"/>
            <NavListItem title="Bootstrap"/>
            <NavListItem title="React-Native"/>
       
            
          </Nav>
        </header>
        <Container>{children}</Container>
        {/* <footer className="footer">
          {"Strapi footer"}
          <style jsx>
            {`
              .footer {
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 60px;
                line-height: 60px;
                background-color: #f5f5f5;
              }
              a:hover {
                cursor: pointer;
                color: yellow;
              }
            `}
          </style>
        </footer> */}
      </div>
    );
  }
}

export default Layout;