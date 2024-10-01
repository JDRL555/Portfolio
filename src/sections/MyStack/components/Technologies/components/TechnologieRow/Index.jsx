/* eslint-disable react/prop-types */
import TechnologieCol from './TechnologieCol/Index'

export default function TechnologieRow({ tech }) {
  return (
    <tr>
      {
        tech.row.map((col, col_index) => <TechnologieCol col={col} key={col_index} />)
      }
    </tr>
  )
}
