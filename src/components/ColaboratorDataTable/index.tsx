import React from 'react'
import { Colaborator, useNavigation } from '../../context/NavigationContext'
import ColaboratorTableRow from '../../fragments/ColaboratorTableRow';


const ColaboratorDataTable = () => {
    const {colaboratorData} = useNavigation()
  return ( 
    <>
      {colaboratorData?.map((item: Colaborator) => (
        <ColaboratorTableRow key={item.agent_id} item={item} />
      ))}
    </>     
  )
}




export default ColaboratorDataTable