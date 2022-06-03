import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import { useNavigation } from '../../context/NavigationContext'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StatusTag from '../../fragments/StatusTag';
import Image from 'next/image';
import { ListContainer } from './style';
import ListItemButton from '../../fragments/ListItemButton';

const ColaboratorItemsList = () => {
    const {colaboratorData} = useNavigation()
  return (
    <ListContainer>
        {colaboratorData?.map(colaborator => (
            <Accordion key={colaborator.agent_id} sx={{
                marginBottom: '8px',
                padding: '16px',
                border: 1,
                borderColor: 'divider',
                borderRadius: '4px',
                boxShadow: 0,
                borderStyle: 'solid',
            }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div className={`${colaborator.status}`}>
                        <div className="bold-text">
                            Nome Completo
                        </div>
                        <div className="initial-info">
                            <div className="image">
                                <Image src={colaborator.image} width={32} height={32} objectFit='contain' alt='Agent Image' />
                            </div>
                            <div className="bold-text">{colaborator.name}</div>
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="info-list">
                        <div className="info-item-box">
                            <div className="bold-text">Departamento</div>
                            <div className="text-info">{colaborator.department}</div>
                        </div>
                        <div className="info-item-box">
                            <div className="bold-text">Cargo</div>
                            <div className="text-info">{colaborator.role}</div>
                        </div>
                        <div className="info-item-box">
                            <div className="bold-text">Unidade</div>
                            <div className="text-info">{colaborator.branch}</div>
                        </div>
                        <div className="info-item-box">
                            <div className="bold-text">Unidade</div>
                            <div className="text-info">{colaborator.branch}</div>
                        </div>
                        <div className="info-item-box">
                            <div className="bold-text">Status</div>
                            <StatusTag status={colaborator.status}/>
                        </div>
                    </div>
                    <ListItemButton />
                </AccordionDetails>
            </Accordion>
        ))}
    </ListContainer>
  )
}

export default ColaboratorItemsList