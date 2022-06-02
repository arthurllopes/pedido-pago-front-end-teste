import React, { useRef } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import styled from '@emotion/styled';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useRouter } from 'next/router';
import { useOutsideClick } from '../../hook/useOutsideClick';
import OptionsModal from '../OptionsModal';

const ColaboratorOptionsModal = ({ID}: {ID: number | string}) => {
    const router = useRouter()
    const handleNavigate = () => {
        router.push(`colaborator/${ID}`)
    }
  return (
        <ModalContent>
            <div className='see' onClick={handleNavigate}>
                <div className='icon'>
                    <VisibilityIcon />
                </div>
                <div>
                    Ver colaborador
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

    .icon {
        margin-right: 16px;
    }
    .remove {
        opacity: 0.6;
        cursor: initial;
    }
    .see {
        &:hover {
            opacity: .9;
            cursor: pointer;
        }
    }
    .remove, .see {
        white-space: nowrap;
        padding: 20px 24px 8px;
        display: flex;
        align-items: start;
    }
`

export default ColaboratorOptionsModal