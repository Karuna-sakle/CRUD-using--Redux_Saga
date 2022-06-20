import React from 'react'

export const Footer = () => { 
    let footerstyle = {
     position:"fixed",
     bottom:0,
     width:"100%",
     height: "60px "
    }
    return (
        <footer className="bg-dark text-light py-3" style={footerstyle}>
            <p className="text-center">
            Copyright &copy; MyReactApp.com
            </p>
        </footer>
    )
  }