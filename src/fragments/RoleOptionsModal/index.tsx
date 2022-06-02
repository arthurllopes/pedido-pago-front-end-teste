import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const RoleOptionsModal = ({ID}: {ID: any}) => {
  const router = useRouter()
  const handleNavigate = () => {

  }
  return (
    <ModalContent>
      <div className='see' onClick={handleNavigate}>
        <div className='icon'>
          <VisibilityIcon />
        </div>
        <div>
          Ver cargo
        </div>
      </div>
      <div className='edit'>
        <div className='icon'>
          <DeleteOutlineIcon />
        </div>
        <div>
          Editar
        </div>
      </div>
      <div className='duplicate'>
        <div className='icon'>
          <DeleteOutlineIcon />
        </div>
        <div>
          Duplicar
        </div>
      </div>
      <div className='remove'>
        <div className='icon'>
          <DeleteOutlineIcon />
        </div>
        <div>
          Excluir
        </div>
      </div>
    </ModalContent>
  )
}
const ModalContent = styled.div`
  div {
    display: flex;
    align-items: center;
  }
    .icon {
      margin-right: 16px;
    }
    .remove, .edit, .duplicate {
      opacity: 0.6;
      cursor: initial;
    }
    .see {
        &:hover {
          opacity: .9;
          cursor: pointer;
        }
    }
    .remove, .see, .edit, .duplicate {
      white-space: nowrap;
      padding: 20px 24px 8px;
      display: flex;
      align-items: start;
    }
`
export default RoleOptionsModal