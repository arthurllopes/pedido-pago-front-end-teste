import styled from '@emotion/styled'
import React from 'react'

const Sidebar = () => {
  return (
    <SidebarContainer>

    </SidebarContainer>
  )
}
const SidebarContainer = styled.div`
    background-color: #fff;
    min-height: 100%;
    width: 256px;

  @media (max-width: 700px) {
    display: none;
  }
`

export default Sidebar