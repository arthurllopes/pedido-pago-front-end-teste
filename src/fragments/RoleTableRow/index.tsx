import styled from '@emotion/styled'
import React from 'react'
import { Role } from '../../context/NavigationContext'
import ActionButton from '../ActionButton';


const RoleTableRow = ({item, index}: {item: Role, index: number}) => {
  return (
    <>
        <RoleTableRowContainer>
            <th>{item.name}</th>
            <th>{item.departament}</th>
            <th>{item.agents_quantity}</th>
            <ActionButton ID={index} />
        </RoleTableRowContainer>
    </>
  )     
}
const RoleTableRowContainer = styled.tr`
    border-bottom: 1px solid #EAEFED;
    th {
        color: #272b2a;
        font-weight: 400;
    }
`

export default RoleTableRow