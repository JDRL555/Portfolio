import styles           from '../public/styles/MyStack.module.css'
import Technologies     from './Technologies'
import { TECHNOLOGIES } from '../utils/technologies.js'

export default function MyStack() {
  return (
    <section>
      <h1 className={styles.h1}>My Stack</h1>
      <Technologies technologies={TECHNOLOGIES} />
    </section>
  )
}
