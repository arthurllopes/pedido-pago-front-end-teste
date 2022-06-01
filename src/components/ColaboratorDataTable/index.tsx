import styled from '@emotion/styled'
import React from 'react'
import { Colaborator, useNavigation } from '../../context/NavigationContext'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StatusTag from '../../fragments/StatusTag';
import Image from 'next/image';


const ColaboratorDataTable = () => {
    const {colaboratorData} = useNavigation()
  return ( 
    <>
      {colaboratorData?.map((item: Colaborator) => (
          <UserTableRow key={item.agent_id}>
            <th className="info">
              <div className="user-image">
                <Image src={item.image} width="32" height='32' objectFit='inherit' alt="Colaborator image"/>
              </div>
              <p>{item.name}</p>
            </th>
            <th>{item.department}</th>
            <th>{item.role}</th>
            <th>{item.branch}</th>
            <th>
              <StatusTag status={item.status} />
            </th>
            <th className="more-btn">
              <MoreVertIcon />
            </th>
          </UserTableRow>
      ))}
    </>     
  )
}

const UserTableRow = styled.tr`
    border-bottom: 1px solid #EAEFED;

    .info {
        display: flex;
        align-items: center;
        justify-content: start;
        padding: 20px;

        .user-image {
            margin-right: 8px;
            min-width: 32px;

            img {
                border-radius: 50%;
            }
        }
        p {
            display: block;
            text-align: start;
            font-weight: 600;
            min-width: 120px;
            max-width: 140px;
        }
    }

    th {
        color: #272b2a;
        font-weight: 400;
    }

    .more-btn {
        padding-left: 100px;
        :hover {
            cursor: pointer;
        }
    }
`


export default ColaboratorDataTable