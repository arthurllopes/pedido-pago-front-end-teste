import Image from 'next/image'
import React from 'react'
import { Agent } from '../../pages/colaborator/[id]'
import { AgentInitialInfo, BoxContainer, DataContent, InfoCard } from './style'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { InputAdornment, MenuItem, TextField } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ColaboratorDetailsBox = ({agent}: {agent: Agent}) => {
  const renderCards = () => {
    const date = new Intl.DateTimeFormat('pt-br').format(new Date(agent.birth_date))
    const cards = [{icon: <AssignmentIndIcon />, name: `${agent.document.type}`, content: agent.document.number}, {icon: <AddIcCallIcon />, name: 'Telefone', content: `+${agent.phone.ddi} ${agent.phone.ddd} ${agent.phone.number}`}, {icon: <DateRangeIcon />, name: 'Nascimento', content: date}]
    const cardsJSX = cards.map((card, index)=> (
      <InfoCard key={index}>
        <div className="icon">
          {card.icon}
        </div>
        <div className="card-info-text">
          <div className="type">
            {card.name}
          </div>
          <div className="content">
            {card.content}
          </div>
        </div>
      </InfoCard>
    ))
    return cardsJSX
  } 
  const renderDataItem = () => {
    const items = [1, 2,3,4]
    const dataJSX = items.map((item, index)=> (
      <TextField key={index} id="outlined-select-disabled" placeholder='Banheiro' label="Departamento" defaultValue="Limpeza" fullWidth select InputProps={{readOnly: true, startAdornment: (
        <InputAdornment position="start">
          Comercial
        </InputAdornment>
      )}} />
    ))
    return dataJSX
  } 
  
    
  
  return (
    <BoxContainer>
      <AgentInitialInfo>
        <div className='agent-image'>
          <Image src={agent.image} width={80} height={80} objectFit='contain' alt='Agent Image' />
        </div>
        <div className='initial-info'>
          <div className='name'>
            {agent.name}
          </div>
          <div className='email'>
            {agent.email}
          </div>
        </div>
      </AgentInitialInfo>
      <div className='info-box'>
        <h5 className="title">Informações pessoais</h5>
        <div className="cards-list">
          {renderCards()}
        </div>
      </div>
      <div className='info-box data'>
        <h5 className="title">Dados organizacionais</h5>
        <DataContent>
          {renderDataItem()}
        </DataContent>
      </div>
    </BoxContainer>
  )
}

export default ColaboratorDetailsBox