import Image from 'next/image'
import React from 'react'
import { Agent } from '../../pages/colaborator/[id]'
import { AgentInitialInfo, BoxContainer, DataContent, InfoCard } from './style'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { TextField } from '@mui/material';

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
    const items = [{type: 'Departamento', content: agent.department}, {type: 'Cargo', content: agent.role}, {type: 'Unidade', content: agent.branch}, {type: 'Status', content: agent.status === 'active' ? 'Ativo' : 'Inativo'}]
    const dataJSX = items.map((item, index)=> (
      <TextField key={index} id="outlined-select-disabled" label={item.type} value={`${item.content}`} fullWidth select InputProps={{readOnly: true, style: {
        padding: '0 20px',
        color: '#587169',
        fontWeight: '500',
        fontFamily: 'Poppins',
        fontSize: '1rem',
      }}}
      InputLabelProps={{
        style: { fontFamily: 'Poppins', fontWeight: '500', fontSize: '14px', color: '#A3B8B0'}
      }}>
        <option value={`${item.content}`}>{item.content}</option>
      </TextField>
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