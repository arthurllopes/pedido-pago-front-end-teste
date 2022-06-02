import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from '@emotion/styled';
import ColaboratorOptionsModal from '../ColaboratorOptionModal';
import OptionsModal from '../OptionsModal';
import { useNavigation } from '../../context/NavigationContext';
import RoleOptionsModal from '../RoleOptionsModal';


const ActionButton = ({ID}: {ID: number | string}) => {
    const {tab} = useNavigation()
    const [modal, setModal] = React.useState(false)

  return (
    <ActionButtonContainer className="more-btn" onClick={() => setModal(prevState => !prevState)}>
        <MoreVertIcon />

        {modal && <OptionsModal setModal={setModal} >
            {tab === 'colaborators' ? (
                <ColaboratorOptionsModal ID={ID} />
            ) : (
                <RoleOptionsModal ID={ID}/>
            )}
        </OptionsModal>}
    </ActionButtonContainer>
  )
}

const ActionButtonContainer = styled.th`
    position: relative;
    text-align: right;
    :hover {
        cursor: pointer;
    }
`

export default ActionButton