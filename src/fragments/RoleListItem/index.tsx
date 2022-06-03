import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import React from 'react'
import { Role } from '../../context/NavigationContext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from '@emotion/styled';
import ListItemButton from '../ListItemButton';


const RoleListItem = ({role}: {role: Role}) => {
    const [expanded, setExpanded] = React.useState(false);
    
  return (
    <Accordion sx={{
        marginBottom: '8px',
        padding: '16px',
        border: 1,
        borderColor: 'divider',
        borderRadius: '4px',
        boxShadow: 0,
        borderStyle: 'solid',
    }}
    expanded={expanded}
    onChange={() => setExpanded((prevState: boolean) => !prevState)}
    //onChange={handleChange(role.name)}
    >
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id={role.name}
        >
            <InitialInfo className="initial-info">
                <div>
                    <div className="bold-text">
                        Cargo
                    </div>
                    <div>
                        <div className="text-info">{role.name}</div>
                    </div>
                </div>
                <div className={`${expanded ? 'expanded' : 'collapsed'}`} >
                    <div className="bold-text">
                        Departamento
                    </div>
                    <div className="text-info">
                        {role.departament}
                    </div>
                </div>
            </InitialInfo>
        </AccordionSummary>
        <AccordionDetails>
            <div className="info-list">
                <div className="info-item-box">
                    <div className="bold-text">Colaboradores</div>
                    <div className="text-info">{role.agents_quantity}</div>
                </div>
            </div>
            <ListItemButton />
        </AccordionDetails>
    </Accordion>
  )
}
export const InitialInfo = styled.div`
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;

    .collapsed {
        display: none;
    }
    .expanded {
        display: block;
    }
`

export default RoleListItem