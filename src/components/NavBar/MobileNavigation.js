import NavLinks from "./NavLinks";
import classes from './NavBar.module.css';
import {FiMenu} from 'react-icons/fi'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useState } from "react";

const MobileNavigation = () => {

    const[open,setOpen]=useState(false);

    const hamburderIcon =  <FiMenu className={classes.Hamburger} size='30px' color="white" 
                            onClick={()=> setOpen(!open)}
                            />
    
    const closeIcon =  <AiOutlineCloseCircle className={classes.Hamburger} size='30px' color="white" 
                            onClick={()=> setOpen(!open)}
                            />

    const closeMobileMenu = () => setOpen(false);

    return ( 
        <nav className={classes.MobileNavigation}>
           {open? closeIcon:hamburderIcon}
            
            {open && <NavLinks isMobile = {true} closeMobileMenu = {closeMobileMenu} />}
            
        </nav>
        
     );
}
 
export default MobileNavigation;