import { TECHS } from '../constants/projects.constants'
import styles from '../public/styles/SomeProjects.module.css'

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export default function Project({ project }) {
  
  return (
    <div className={styles.project}>
      <img src={project.src} alt={project.name} />
      <div className={styles.card_container}>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <div className={styles.card_footer}>
          <div className={styles.icon}>
            {
              project.techs.map((stack, stack_index) => (
                TECHS.find(tech => tech.name == stack.name).icon({ key: stack_index })
              ))
            }
          </div>
          <div>
            <button>Repository</button>
            <button>Page</button>
          </div>
        </div>
      </div>
    </div>
  )
}
