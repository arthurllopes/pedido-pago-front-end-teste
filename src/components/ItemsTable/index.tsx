import React from 'react'
import Pagination from '../Pagination'
import {ItemsTableContainer} from './style'
import { useNavigation } from '../../context/NavigationContext';
import RolesDataTable from '../RolesDataTable';
import ColaboratorDataTable from '../ColaboratorDataTable';
import {LoadingButton} from '@mui/lab'


const ItemsTable = () => {
  const {tab, loading, erro, heading} = useNavigation()

  if (loading) return (
    <>
      <LoadingButton loading={loading}>
      </LoadingButton>
    </>
  )
  return (
    <>
      <h4 className='list-title'>Listagem de {tab === 'colaborators' ? 'Colaboradores' : 'Cargos'}</h4>
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
          {erro ? (
            <>
              <p>{erro}</p>
            </>
          ) : (
            tab === 'colaborators' ? (
              <ColaboratorDataTable />
            ) : (
              <RolesDataTable />
            )
          )}
        </tbody>
      </ItemsTableContainer>

      <Pagination current_page={1} last_page={10} total={100} per_page={10} />
    </>
  )
}

export default ItemsTable