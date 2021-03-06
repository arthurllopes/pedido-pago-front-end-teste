import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import api from '../../services/api'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ColaboratorDetailsBox from '../../components/ColaboratorDetailsBox'
import Link from 'next/link'
import styled from '@emotion/styled'

export type Agent = {
  id: number,
  name: string,
  email: string,
  phone: { 
    ddd: string,
    ddi: string,
    number: string,
  },
  document: {
    type: string,
    number: string
  },
  birth_date: string,
  image: string,
  department: string,
  branch: string,
  role: string,
  status: string
}

const ColaboratorPage = ({agent}: {agent: Agent}) => {
  return (
    <>
      <Head>
        <title>Pedido pago</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <MainContainer>
        <Sidebar />
        <div className="main">
          <div className='title'>
            <Link href='/' >
              <div className='back-btn'>
                <ArrowBackIcon />
              </div>
            </Link>
            <h3 className="title">Detalhes do colaborador</h3>
          </div>
          <ColaboratorDetailsBox agent={agent}/>
        </div>
      </MainContainer>
    </>
  )
}

export default ColaboratorPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await api.get(`agent/${context.query.id}`)
  const {agent} = response.data
  return {
    props: {
      agent
    }
  }
}

const MainContainer = styled.main`
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