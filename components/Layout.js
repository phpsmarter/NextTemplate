import React,{Fragment} from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem ,Container} from 'reactstrap';
const  searchs=[{title:"React"},{title:"Redux"},{title:"Javascript"},{title:"BootStrap"}]
import NavListItem from "./NavListItem";
class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    const { children } = this.props;
    const title = "Welcome to Nextjs";
    return (
      <Fragment>
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
          
          <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
          <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
          <script>
           AOS.init();
          </script>
        </Head>
        <header>
        
        <Navbar color="info" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">React</NavLink>
              </NavItem>

              <NavItem>
                <Link href="/Dog"><a>Dog</a></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      
        </header>
        <Container>{children}</Container>
      </Fragment>  
    );
  }
}

export default Layout;