import styled from '@emotion/styled'
import React from 'react'
import { useNavigation } from '../../context/NavigationContext'

const CategoryModal = ({tabs}: {tabs: any}) => {
  const {setTab} = useNavigation()
  return (
    <CategoryModalContainer>
        <div className="heading">
          <div className="">Categorias</div>
          <div className="">x</div>
        </div>
        {tabs.map((tab: any, index: number) => (
          <div key={index} className="tab" onClick={() => setTab(tab.id)}>
            {tab.name}
          </div>
        ))}
    </CategoryModalContainer>
  )
}

const CategoryModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 8px;
  width: 100%;

  .heading {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 8px;

    color: #34423D;
    font-weight: 600;
  }
  .tab {
    padding: 8px 16px;

    &:hover {
      filter: brightness(.8);
      cursor: pointer;
    }
  }
`

export default CategoryModal