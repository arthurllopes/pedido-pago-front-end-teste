import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from '@emotion/styled';
import ColaboratorOptionsModal from '../ColaboratorOptionModal';
import OptionsModal from '../OptionsModal';
import { useNavigation } from '../../context/NavigationContext';
import RoleOptionsModal from '../RoleOptionsModal';


const ActionButton = ({children}: {children: JSX.Element}) => {
    const [modal, setModal] = React.useState(false)

  return (
    <ActionButtonContainer className="more-btn" onClick={() => setModal(prevState => !prevState)}>
        <MoreVertIcon />

        {modal && <OptionsModal setModal={setModal} >
            {children}
        </OptionsModal>}
    </ActionButtonContainer>
  )
}

const ActionButtonContainer = styled.div`
    position: relative;
    text-align: right;
    :hover {
        cursor: pointer;
    }
`

export default ActionButton