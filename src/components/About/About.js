import classes from './About.module.css';
//import pageheader component
import PageHeader from '../PageHeader/PageHeader.js'
import Me from '../../img/Mypic.jpg'


    const About =() =>{

        return (  
            <div className={classes.AboutMe} id="about">
                <PageHeader title={'About me'}/>
                <div className={classes.Container}>
                    <div className={classes.Text}>
                        <h2>Hello! I'm Ulaganathan</h2><br/>
                        <p>
                            Hi, I'm a software developer from india i completed mechanical engineering
                            my home town is Tirunelveli
                            now im staying in chennai 
                            I have done my schooling from Jaipur. For my graduation,
                            I chose Xyz program at Abc University.
                            It was a very enriching experience at the University as not only we were actively involved in practical projects,
                            but also got opportunities to participate in a number of sports and other extra-curricular activities such as plays and skits.

                            
                        </p>
                    </div>
                    <div className={classes.Photo}>
                        <img className={classes.Me} src={Me} alt='me'></img>
                    </div>
                </div>
                
            </div>
        );

    }
    

 
export default About;