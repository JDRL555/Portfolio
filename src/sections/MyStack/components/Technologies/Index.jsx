/* eslint-disable react/prop-types */
import TechnologieRow from './components/TechnologieRow/Index'
import styles from './styles/Technologies.module.css'


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
          technologies.map(
            (tech, tech_index) => <TechnologieRow tech={tech} key={tech_index} />
          )
        }
      </tbody>
    </table>
  )
}
