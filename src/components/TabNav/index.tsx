import React from 'react'
import { useNavigation } from '../../context/NavigationContext'
import {Tab, Tabs} from '@mui/material'
import { Box } from '@mui/material'
import ActionButton from '../../fragments/ActionButton'
import CategoryModal from '../../fragments/CategoryModal'
import useIsMobile from '../../hook/useIsMobile'

const TabNav = () => {
  const {setTab, tab} = useNavigation()
  const isMobile = useIsMobile(700)
  
  const tabs = [{name: "Colaboradores", id: 'colaborators'}, {name: "Cargos", id: "roles"}]
  const renderTabs = () => {
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

  if (isMobile && (typeof window !== "undefined")) {
    return (
      <Box sx={{ border: 2, borderColor: '#CAD6D1', borderRadius: 2, width: '100%', marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 16px'}} >
        {tab === 'colaborators' ? 'Colaboradores' : 'Cargos'}
        <ActionButton>
          <CategoryModal tabs={tabs} />
        </ActionButton>
    </Box>
    )
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