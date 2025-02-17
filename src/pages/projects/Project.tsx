import SectionTitle from "../../components/sectiontitle/SectionTitle";
import styles from './Project.module.css'
const Project:React.FC<{}>=()=>{
    return (
        <div className={styles.container}>
            <div style={{marginLeft:'10%',marginTop:'5%',width:'100%'}}> <SectionTitle title='Project'/></div>
        </div>
    )
}
export default Project;
