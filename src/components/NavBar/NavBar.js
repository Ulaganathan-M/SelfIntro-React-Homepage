import classes from './NavBar.module.css';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

const NavNar = () => {
    return ( 
        <div className={classes.NavBar}>
            <Navigation/>
            <MobileNavigation />
        </div>
     );
}
 
export default NavNar;