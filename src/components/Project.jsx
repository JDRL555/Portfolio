import {
  SiReact, SiFastapi, SiMongodb, SiFlask, SiMysql
} from 'react-icons/si'
import styles from '../public/styles/SomeProjects.module.css'

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export default function Project({ project }) {
  const all_techs = [
    { name: "react", icon: <SiReact /> },
    { name: "fastapi", icon: <SiFastapi /> },
    { name: "mongodb", icon: <SiMongodb /> },
    { name: "flask", icon: <SiFlask /> },
    { name: "mysql", icon: <SiMysql /> },
  ]
  return (
    <div className={styles.project}>
      <img src={project.src} alt={project.name} />
      <div className={styles.card_container}>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <div className={styles.card_footer}>
          <div className={styles.icon}>
            {
              project.techs.map(stack => (
                all_techs.find(tech => tech.name == stack.name).icon
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
