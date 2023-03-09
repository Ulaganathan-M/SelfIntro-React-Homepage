import classes from './Home.module.css';
import code from '../../img/arrow.png'
import www from '../../img/wwwbg.png'
import WaveLine from './WaveLine';
import { motion } from 'framer-motion';

const Home = () => {
    return ( 
        <>
            <div className={classes.Home} id="home">
                <WaveLine />
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hello, world...</h1>
                <h1> Welcome to my website</h1>
            </div>
            <img className={classes.Code} src={code} alt="code" />
            <motion.img 
            initial={{scale:0}}
            animate={{scale:1}}
            transition={{delay:1.5,duration:1}}
            className={classes.BinaryWorld} src={www} alt="insta" />
        </div>
        
        

        </> 
        
    );
}
 
export default Home;