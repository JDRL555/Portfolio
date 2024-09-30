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
          technologies.map(tech => (
            <tr key={tech.id} className={styles.rows}>
              {tech.row.map(col => (
                <td key={col.col_id}>
                  {
                    <div className={styles.container_flex} key={col.stacks[0].col_id}>
                      {
                        col.stacks.map(stack => (
                          <div 
                            id={styles[stack.name.toLowerCase()]} 
                            className={styles.icon_container} key={stack.col}
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
