import styled from '@emotion/styled'
import React from 'react'
import { Role } from '../../context/NavigationContext'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RoleOptionsModal from '../RoleOptionsModal';
import ActionButton from '../ActionButton';


const RoleTableRow = ({item}: {item: Role}) => {

  return (
    <>
        <RoleTableRowContainer>
            <th>{item.name}</th>
            <th>{item.departament}</th>
            <th>{item.agents_quantity}</th>
            <ActionButton ID={item.name} />
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