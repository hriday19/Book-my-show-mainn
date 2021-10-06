import React from 'react'
import Navbar from "../components/Navbar/Navbar.components";
const Movielayout = (props) => {
    return (
        <>
        <Navbar/>
      {props.children}
        </>
    );
};
export default Movielayout;