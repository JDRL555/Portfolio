/* eslint-disable react/prop-types */
import styles from './styles/TechnologieCol.module.css'

export default function TechnologieCol({ col }) {
  return (
    <td>
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
    </td>
  )
}
