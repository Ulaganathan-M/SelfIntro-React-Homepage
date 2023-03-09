import classes from './YouTube.module.css';
import PageHeader from '../PageHeader/PageHeader';
import irfan01 from '../../img/irfan01.webp';
import irfan02 from '../../img/irfan02.webp';
import irfan03 from '../../img/irfan03.webp';
import Background from '../../img/youtubebb.jpg';
import PlayButton from '../../img/youtube-play-button-play-video-youtube-logo-svgrepo-com.svg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const playBtn = (url) => {
    return(
        <div className={classes.Playbutton}
        onClick={(e)=> window.open(url,"_blank").focus}
        
        >
          <motion.img whileHover={{scale:1.5}} className={classes.Play}src={PlayButton} alt="blank"/>

        </div>
    
    )
}


const YoutubeVideo = (url,thumbnail, description) => {
    return (
        <div className={classes.VideoContainer}>
            <div className={classes.Thumbnail}>

                 {playBtn(url)}

                <img src={thumbnail} alt='thumbnail'></img>
            </div>
            <div className={classes.Text}>
                <p>
                    {description}
                </p>

            </div>
        </div>
    )
}

const irfan01Description = 'In this video, i visited Madame Tussauds in los Angeles where they have the wax statue of famous celebrities.'
const irfan02Description = 'in this video, i was invited to by Governor to Raj Bhavan for the Republic day function and we got to see CM Stalin and Governor RN Ravi close up.'
const irfan03Description = 'Ram, Founder, CEO of THISAI group (THISAI Exports and Imports & THISAI Logistics), USA. THISAI is a Supply Chain & Trade Consulting and Fulfillment Company located in Los Angeles, USA and Chennai, India and operate globally through their services.'


const YouTube = () => {

    const {ref, inView} = useInView({
        threshold:0.3
    });

    const animation = useAnimation();

    useEffect(() => {
        if(inView){

            animation.start({
                x:0,
                transition: {
                    type:"spring", duration: 1, bounce: 0.3
                }
            })
        }
        if(!inView){
            animation.start({
                x:'-100vw'
            })
        }

    },[inView])

    return ( 
        <div className={classes.YouTube} id="youtube">
            <img className={classes.Background} src={Background} alt='background' />
            <PageHeader title="My YouTube Channel" />
            
            <div ref={ref} className={classes.YouTubeContent}>
                <div className={classes.Paragraph}>
                    <p>
                    A successful YouTube channel should include your logo, channel name,
                    consistent brand colors, captivating music or sound effects, and a catchy tagline.
                    These branding elements will help viewers know what you do and help your brand stand out next to your competition.
                    </p>
                </div>
                <motion.div className={classes.Videos}
                animate={animation}
                
                >
                    {YoutubeVideo("https://www.youtube.com/watch?v=5943ANCrXKQ",irfan01,irfan01Description)}
                    {YoutubeVideo("https://www.youtube.com/watch?v=8gWbuZcf6hY",irfan02,irfan02Description)}
                    {YoutubeVideo("https://www.youtube.com/watch?v=CXipVtLdYg8",irfan03,irfan03Description)}
                
                </motion.div>
            </div>
        </div>
     );
}
 
export default YouTube;