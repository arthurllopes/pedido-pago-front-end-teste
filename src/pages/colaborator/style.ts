import styled from '@emotion/styled'

export const MainContainer = styled.main`
  display: flex;
  max-width: 100vw;

  .main {
    padding: 0 14px;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 2rem;

    @media (max-width: 800px) {
      font-size: 1.8rem;
    }
    @media (max-width: 800px) {
      font-size: 1.4rem;
    } 
  }
  .back-btn {
    width: 36px;
    height: 36px; 
    border-radius: 50%;
    background-color: #EAEFED;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-right: 1rem;

    &:hover {
      cursor: pointer;
      filter: brightness(.8);
    }
  }
`