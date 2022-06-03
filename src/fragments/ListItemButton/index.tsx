import styled from '@emotion/styled'
import React from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';

const ListItemButton = () => {
  return (
    <ButtonContainer>
        <div className="icon">
            <AttachFileIcon />
        </div>
        <div className="btn-text">Ações</div>
    </ButtonContainer>
  )
}

export const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    margin-top: 14px;
    border: 1px solid #1DD195;
    background-color: #fff;
    cursor: pointer;

    .icon {
        margin-right: 10px;
        color: #1DD195;
    }
    .btn-text {
        font-size: 1rem;
        font-weight: 600;
        color: #34423D;
    }
`

export default ListItemButton