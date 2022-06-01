import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from '@emotion/styled';
import { Role, useNavigation } from '../../context/NavigationContext';


const RolesDataTable = () => {
    const {rolesData} = useNavigation()
  return (
    <>
        {rolesData?.map((item: Role, index: number) => (
            <RoleTableRow key={index}>
                <th>{item.name}</th>
                <th>{item.departament}</th>
                <th>{item.agents_quantity}</th>
                <th className="more-btn">
                  <MoreVertIcon />
                </th>
            </RoleTableRow>
        ))}
    </>
  )
}

const RoleTableRow = styled.tr`
    border-bottom: 1px solid #EAEFED;
    th {
        color: #272b2a;
        font-weight: 400;
    }
    .more-btn {
        text-align: right;
    }
`

export default RolesDataTable