import styles from '../public/styles/MyStack.module.css'

export default function MyStack() {
  return (
    <section>
      <h1 className={styles.h1}>My Stack</h1>
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
          <tr>
            <td>
              <div id={styles.javascript} className={styles.icon_container}>
                <img src="../src/public/img/JavaScript.png" className={styles.icon} />
                <p>Javascript</p>
              </div>
            </td>
            <td>
              <div id={styles.html} className={styles.container_flex}>
                <div className={styles.icon_container}>
                  <img src="../src/public/img/HTML.png" className={styles.icon} />
                  <p>HTML5</p>
                </div>
                <div id={styles.css} className={styles.icon_container}>
                  <img src="../src/public/img/CSS.png" className={styles.icon} />
                  <p>CSS3</p>
                </div>
              </div>
            </td>
            <td>
              <div id={styles.node} className={styles.container_flex}>
                <div className={styles.icon_container}>
                  <img src="../src/public/img/Node.png" className={styles.icon} />
                  <p>NodeJS</p>
                </div>
                <div id={styles.express} className={styles.icon_container}>
                  <img src="../src/public/img/Express.png" className={styles.icon} />
                  <p>Express</p>
                </div>
              </div>
            </td>
            <td>
              <div id={styles.mongo} className={styles.icon_container}>
                <img src="../src/public/img/MongoDB.png" className={styles.icon} />
                <p>MongoDB</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div id={styles.typescript} className={styles.icon_container}>
                <img src="../src/public/img/TypeScript.png" className={styles.icon} />
                <p>Typescript</p>
              </div>
            </td>
            <td>
              <div className={styles.container_flex}>
                <div id={styles.react} className={styles.icon_container}>
                  <img src="../src/public/img/React.png" className={styles.icon} />
                  <p>React</p>
                </div>
                <div id={styles.next} className={styles.icon_container}>
                  <img src="../src/public/img/Next.png" className={styles.icon} />
                  <p>NextJS</p>
                </div>
              </div>
            </td>
            <td>
              <div className={styles.container_flex}>
                <div id={styles.flask} className={styles.icon_container}>
                  <img src="../src/public/img/Flask.png" className={styles.icon} />
                  <p>Flask</p>
                </div>
                <div id={styles.fast} className={styles.icon_container}>
                  <img src="../src/public/img/FastAPI.png" className={styles.icon} />
                  <p>FastAPI</p>
                </div>
              </div>
            </td>
            <td>
              <div id={styles.mysql} className={styles.icon_container}>
                <img src="../src/public/img/MySQL.png" className={styles.icon} />
                <p>MySQL</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div id={styles.python} className={styles.icon_container}>
                <img src="../src/public/img/Python.png" className={styles.icon} />
                <p>Python</p>
              </div>
            </td>
            <td>
              <div id={styles.tailwind} className={styles.icon_container}>
                <img src="../src/public/img/Tailwind.png" className={styles.icon} />
                <p>TailwindCSS</p>
              </div>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
