import styled from '@emotion/styled'
import Image from 'next/image'
import React, { MouseEvent } from 'react'
import { Colaborator } from '../../context/NavigationContext'
import ColaboratorOptionsModal from '../ColaboratorOptionModal'
import StatusTag from '../StatusTag'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ActionButton from '../ActionButton'


const ColaboratorTableRow = ({item}: {item: Colaborator}) => {
  
  return (
    <>
      <ColaboratorTableRowContainer className={`${item.status === 'active' ? 'active' : 'inactive'}`}>
        <th className={`info ${item.status === 'active' ? 'active' : 'inactive'}`}>
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
        <ActionButton ID={item.agent_id} />
      </ColaboratorTableRowContainer>
    </>
  )
}

const ColaboratorTableRowContainer = styled.tr`
    border-bottom: 1px solid #EAEFED;
    
    &.inactive {
      th {
        filter: opacity(.6)
      }
      .more-btn {
        filter: opacity(1) !important;
      }
      
    }

    .info {
        display: flex;
        align-items: center;
        justify-content: start;
        padding: 20px;

        .user-image {
            margin-right: 8px;
            width: 32px;
            height: 32px;

            img {
              border-radius: 50%;
            }
        }
        p {
          display: block;
          text-align: start;
          font-weight: 600;
          max-width: 120px;
        }
    }

    th {
      color: #272b2a;
      font-weight: 400;
    }
`

export default ColaboratorTableRow