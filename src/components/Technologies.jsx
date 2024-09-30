/* eslint-disable react/prop-types */
import styles from '../public/styles/MyStack.module.css'

export default function Technologies({ technologies }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Languages</th>
          <th>Front-end</th>
          <th>Back-end</th>
          <th>Database</th>
        </tr>
      </thead>
      <tbody>
        {
          technologies.map((tech, tech_index) => (
            <tr key={tech_index} className={styles.rows}>
              {tech.row.map((col, col_index) => (
                <td key={col_index}>
                  {
                    <div className={styles.container_flex} key={col.stacks[0].col_id}>
                      {
                        col.stacks.map((stack, stack_index) => (
                          <div 
                            key={stack_index}
                            id={styles[stack.name.toLowerCase()]} 
                            className={styles.icon_container}
                          >
                            <img src={stack.src} className={styles.icon} />
                            <p>{stack.name}</p>
                          </div>
                        ))
                      }  
                    </div>
                  }
                </td>
              ))}
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
