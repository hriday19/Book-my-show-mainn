import React from 'react'
import MovieNavbar from "../components/Navbar/Navbar.components";
const Movielayout = (props) => {
    return (
        <>
        <MovieNavbar/>
      {props.children}
        </>
    );
};
export default Movielayout;