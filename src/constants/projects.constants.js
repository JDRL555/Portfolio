import {
  SiReact, SiFastapi, SiMongodb, SiFlask, SiMysql
} from 'react-icons/si'

export const PROJECTS = [
  {
    name: "Task App",
    description: "A simple app to handle the daily tasks with an account.",
    src: "../src/public/img/task_app.png",
    techs: [
      { name: "react" },
      { name: "fastapi" },
      { name: "mongodb" },
    ]
  },
  {
    name: "MAVET App",
    description: "The Museum of Visual Arts and Space of the state of Tachira page to public art works. ",
    src: "../src/public/img/mavet_app.png",
    techs: [
      { name: "flask" },
      { name: "mysql" },
    ]
  }
]

export const TECHS = [
  { name: "react", icon: SiReact() },
  { name: "fastapi", icon: SiFastapi() },
  { name: "mongodb", icon: SiMongodb() },
  { name: "flask", icon: SiFlask() },
  { name: "mysql", icon: SiMysql() },
]