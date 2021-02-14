import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer.js';


function Layout(props) {
    return(
         <React.Fragment>
             <Navbar/>
             <div className="container">
             {props.children}
             </div>
             
             <Footer/>
         </React.Fragment>
    );
}

export default Layout;