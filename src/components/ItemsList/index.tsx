import React from 'react'
import { useNavigation } from '../../context/NavigationContext'
import ColaboratorItemsList from '../ColaboratorItemsList'
import RoleItemsList from '../RoleItemsList'
import { ItemsListContainer } from './style'

const ItemsList = () => {
    const {tab} = useNavigation()
  return (
    <ItemsListContainer>
        {tab === 'colaborators' ? <ColaboratorItemsList /> : <RoleItemsList />}
    </ItemsListContainer>
  )
}

export default ItemsList