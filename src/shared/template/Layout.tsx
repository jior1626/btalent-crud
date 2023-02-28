import React, {useState, useEffect, useRef} from "react";
import { useLocation } from "react-router-dom";

import "./Layout.css"
import routes from "./../../routes";


import sidebarImage from "./../../assets/images/sidebar-3.jpg";
import NavbarMenu from "./navbar/Navbar";
// import NavbarMenu from "./navbar/Navbar";

interface LayoutInterface {
    children?: React.ReactNode;
}
const Layout: React.FC<LayoutInterface> = ({children}) => {


    return (
       <div className="wrapper">
            <div className="main-panel">
                <div className="">
                    <NavbarMenu /> 
                </div>
                <div className="content">
                    {children}
                </div>
                {/* <Footer /> */}
            </div>
        </div> 
    )


}

export default Layout;

