import classes from './Skills.module.css'
import PageHeader from '../PageHeader/PageHeader.js'

//inline styling
const listTitleSyle = {
    fontWeight: 900,
    fontSize: 'calc(1.2rem + 1vw)',
    color: '#9B1FE8',
    marginBottom: '4px'

}

const backendSkils = 
    <ul>
        <li style={listTitleSyle}>BACKEND</li>
        <li>JAVA  - SQL</li>
        <li>SPRNG BOOT  - NODEJS</li>
    </ul>
const frontendSkills = 
    <ul>
        <li style={listTitleSyle}>FRONTEND</li>
        <li>REACKJS  - HTML</li>
        <li>CSS</li>
    </ul>

const otherSkills = 
    <ul>
        <li style={listTitleSyle}>OTHER SKILLS</li>
        <li>LINUX  - WINDOWS</li>
        <li>MAVEN - MVC</li>
    </ul>


const totalSkills = [backendSkils,frontendSkills,otherSkills];

const Skills = () => {
    return ( 
        <div className={classes.Skills} id="skills">
            <PageHeader title={'What about the skills?'}/>
            <p>
                If you are changing careers or industries and do not have extensive professional experience, you might decide to feature them at the top of your resume. This type of resume is called a functional resume.

                To include skills on a functional resume, you should create skill sections that list your successes with key skills relevant to the position for which you’re applying. Any professional experience you do have should go below your skills section.

                Here is an example of how to list skills on a functional resume.
                Skills

                Process Streamlining

                Created customer service email scripts used across the company to interact with customers. Single-handedly created customer service representative training manual, reducing on-boarding process from 8 to 6 weeks.
                Reduced average customer representative call time by 90 seconds with intuitive online training.

            </p><br />
            <div className={classes.Container}>
                {totalSkills.map(skills =>{
                    return (
                        <div className={classes.List}>
                            {skills}<br/>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Skills;