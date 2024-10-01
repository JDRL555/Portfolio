import { PROJECTS } from '../../constants/projects.constants.js'
import Project      from '../../components/Project.jsx'
import styles       from './styles/RecentProjects.module.css'

export default function RecentProjectsSection() {
  return (
    <section id='section_projects' className={styles.projects_section}>
      <div className="dark_section"></div>
      <h1 className={styles.h1}>Recent projects</h1>
      <div className={styles.projects}>
        {
          PROJECTS.map(project => (
            <Project project={project} key={project.name} />
          ))
        }
      </div>
    </section>
  )
}
