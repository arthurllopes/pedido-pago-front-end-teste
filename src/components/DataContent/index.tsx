import { LoadingButton } from '@mui/lab'
import React from 'react'
import { useNavigation } from '../../context/NavigationContext'
import useIsMobile from '../../hook/useIsMobile'
import ItemsList from '../ItemsList'
import ItemsTable from '../ItemsTable'


const DataContent = () => {
    const isMobile = useIsMobile(700)
    const {loading, erro, tab} = useNavigation()

    if (loading) {
        return (
            <>
                <LoadingButton loading={loading}>
                </LoadingButton>
            </> 
        )
    }
    if (erro) {
        return (
            <>
              <p>{erro}</p>
            </>
        )
    }
    if (isMobile) return <ItemsList />

    return <ItemsTable />
}

export default DataContent