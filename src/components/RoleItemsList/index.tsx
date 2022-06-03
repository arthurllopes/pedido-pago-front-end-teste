import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import React, { useRef } from 'react'
import { useNavigation } from '../../context/NavigationContext'
import { ListContainer } from './style';
import RoleListItem from '../../fragments/RoleListItem';


const RoleItemsList = () => {
    const {rolesData} = useNavigation()

  return (
    <ListContainer>
        {rolesData?.map((role, index) => (
            <RoleListItem key={index} role={role} />
        ))}
    </ListContainer>
  )
}

export default RoleItemsList