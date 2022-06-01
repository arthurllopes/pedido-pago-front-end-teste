import styled from '@emotion/styled'
import React from 'react'

const StatusTag = ({status}: {status: string}) => {
  return (
    <StatusTagContainer >
        <div className={status === 'active' ? 'active' : 'inactive'}>
            {status === 'active' ? 'Ativo' : 'Inativo'}
        </div>
    </StatusTagContainer>
  )
}

const StatusTagContainer = styled.div`
    div {
        border-radius: 80px;
        font-size: 14px;
        color: #34423D;
        text-align: center;
    }
    .active {
        background-color: #B5F1DD;
    }
    .inactive {
        background-color: #EAEFED;
    }

    
`

export default StatusTag