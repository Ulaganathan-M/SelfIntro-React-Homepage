import { FaYoutube, FaInstagramSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import classes from './Contact.module.css';
import { motion } from "framer-motion";

const handleURL = (url) => {
    return () => window.open(url,"_blank")
}

const Contact = () => {
    return ( <div className={classes.Contact} id="contact">

        <div className={classes.ContactIcons}>
            <motion.div
            whileHover={{scale:1.5}}>
                <FaYoutube color='white' size='30px' style={{padding: '1%'}}
                onClick={handleURL('https://www.youtube.com/@irfansview1')} />
            </motion.div>
            <motion.div
            whileHover={{scale:1.5}}>
                <FaInstagramSquare color='white' size='30px' style={{padding: '1%'}}
                onClick={handleURL('https://www.instagram.com/accounts/login/')} />
            </motion.div>
            <motion.div
            whileHover={{scale:1.5}}>
                <FaGithub color='white' size='30px' style={{padding: '1%'}}
                onClick={handleURL('https://github.com/login')} />
            </motion.div>
            <motion.div
            whileHover={{scale:1.5}}>
                <FaLinkedin color='white' size='30px' style={{padding: '1%'}}
                onClick={handleURL('https://www.linkedin.com/signup')} />
            </motion.div>
        
       
        
       
        </div>
    </div> 
    );
}
 
export default Contact;