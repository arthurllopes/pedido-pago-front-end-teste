import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from '@emotion/styled';
import { Role, useNavigation } from '../../context/NavigationContext';
import RoleTableRow from '../../fragments/RoleTableRow';


const RolesDataTable = () => {
    const {rolesData} = useNavigation()
  return (
    <>
        {rolesData?.map((item: Role, index: number) => (
            <RoleTableRow item={item} key={index} />
        ))}
    </>
  )
}

export default RolesDataTable