import styled from '@emotion/styled'
import React, { useRef } from 'react'
import { useOutsideClick } from '../../hook/useOutsideClick';
type Props = {
    children: JSX.Element,
    setModal: (cb: boolean) => void
}
const OptionsModal = ({children, setModal}: Props) => {
    const ref = useRef(null);
    useOutsideClick(ref, setModal);
  return (
    <ModalContainer ref={ref}>
        {children}
    </ModalContainer>
  )
}
const ModalContainer = styled.div`
    z-index: 300;
    color: #587169;
    background-color: #fff;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 8px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: fit-content;
    height: fit-content;

    position: absolute;
    right: 5px;
    bottom: 38px;

    .icon {
        margin-right: 16px;
    }
`

export default OptionsModal