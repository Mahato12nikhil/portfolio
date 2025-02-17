import SectionTitle from '../../components/sectiontitle/SectionTitle';
import styles from '../about/About.module.css'

const About=()=>{
    return (
        <div className={styles.container}>
            <div style={{marginLeft:'10%',marginTop:'5%',width:'100%'}}> <SectionTitle title='About'/></div>
        </div>
    )
}
export default About;