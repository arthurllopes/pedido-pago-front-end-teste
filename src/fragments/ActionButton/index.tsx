import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from '@emotion/styled';
import OptionsModal from '../OptionsModal';


const ActionButton = ({children}: {children: JSX.Element}) => {
    const [modal, setModal] = React.useState(false)

  return (
    <ActionButtonContainer className="more-btn" data-testid="more-btn" onClick={() => setModal(prevState => !prevState)}>
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