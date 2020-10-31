import React from 'react';
import './Footer.css';
import { Form, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className="footer">
            <div class="main-footer">
                  <NavLink
                      to="/"
                      className="foot-link"
                  >
                    © 2020 IniGugel
                  </NavLink>
                  <br></br>
                  <NavLink
                      to="/about"
                      className="foot-link"
                  >
                    Perihal
                  </NavLink>
            </div>
        </div>
    )
}