import React from 'react'
import { useNavigation } from '../../context/NavigationContext'
import {Tab, Tabs} from '@mui/material'
import { Box } from '@mui/material'

const TabNav = () => {
  const {setTab, tab} = useNavigation()
  
  const renderTabs = () => {
    const tabs = [{name: "Colaboradores", id: 'colaborators'}, {name: "Cargos", id: "roles"}]
    const tabsJSX = tabs.map(({name, id}: {id: string, name: string}) => (
      <Tab key={id} onClick={() => setTab(id)} label={name} id={id} value={id} 
      sx={{
        width: 240,
        fontWeight: '600',
        fontSize: '14px',
        fontFamily: 'Poppins',
        color: '#34423D',
        textDecoration: 'none',
      }}
      />
    ))

    return tabsJSX
  }

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%', marginBottom: '40px'}} >
      <Tabs value={tab} textColor="inherit" TabIndicatorProps={{style: {background:'#22E0A1'}}}>
        {renderTabs()}
      </Tabs>
    </Box>
  )
}

export default TabNav