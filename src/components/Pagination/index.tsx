import React from 'react'
import { useNavigation } from '../../context/NavigationContext'

type Props = {
    current_page: number,
    last_page: number,
    total: number,
    per_page: number,
}

const Pagination = ({current_page, last_page, total, per_page}: Props) => {
    const {tab} = useNavigation()
    function nextPage() {
        if (current_page < lastPage) {
          setCurrentPage(prevState => prevState + 1)
        }
      }
      function prevPage() {
        if (current_page > 1) {
          setCurrentPage(prevState => prevState - 1)
        }
    }
  return (
    <div>
        <div>Mostrando {per_page} de {total} registros</div>

        {tab === 'colaborators' &&  <div>
            
        </div>}
    </div>
  )
}

export default Pagination