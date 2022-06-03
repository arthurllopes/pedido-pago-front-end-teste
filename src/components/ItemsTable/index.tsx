import React from 'react'
import Pagination from '../Pagination'
import {ItemsTableContainer} from './style'
import { useNavigation } from '../../context/NavigationContext';
import RolesDataTable from '../RolesDataTable';
import ColaboratorDataTable from '../ColaboratorDataTable';


const ItemsTable = () => {
  const {tab, heading} = useNavigation()

  return (
    <>
      <ItemsTableContainer>
        <thead>
          <tr className="heading">
            {heading.map((head: string) => (
              <th key={head}>{head}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tab === 'colaborators' ? 
            (
              <ColaboratorDataTable />
            ) : (
              <RolesDataTable />
            )
          }
        </tbody>
      </ItemsTableContainer>

      <Pagination current_page={1} last_page={10} total={100} per_page={10} />
    </>
  )
}

export default ItemsTable