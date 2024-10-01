import Technologies     from './components/Technologies/Technologies'
import { TECHNOLOGIES } from '../../constants/technologies.constants'
import styles           from './styles/MyStack.module.css'

export default function MyStack() {
  return (
    <section id='section_my_stack' className={styles.stack_section}>
      <div className="dark_section"></div>
      <h1 className={styles.h1}>My Stack</h1>
      <Technologies technologies={TECHNOLOGIES} />
    </section>
  )
}
