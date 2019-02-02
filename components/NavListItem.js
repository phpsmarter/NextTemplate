import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Nav, NavItem } from "reactstrap";

 const NavListItem=(props)=>{
    console.log(props);
    return (

            <NavItem >
              <Link href="#">
                <a>{`${props.title}`}</a>
              </Link>
            </NavItem> 
    )
}

export default NavListItem;