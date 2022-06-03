import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import api from "../services/api";

export type Colaborator = {
    agent_id: number,
    name: string,
    image: string,
    department: string,
    branch:string,
    role: string,
    status: string
}
export type Role = {
    name: string,
    departament: string,
    agents_quantity: number
}

type NavigationContextType = {
    tab: string;
    setTab: (tab: string) => void;
    heading: string[],
    loading: boolean,
    erro: string,
    colaboratorData: Colaborator[] | undefined,
    rolesData: Role[] | undefined
}
type NavigationContextProviderProps = {
    children: ReactNode;
};
export const NavigationContext = createContext({} as NavigationContextType)

export const NavigationContextProvider = ({children}: NavigationContextProviderProps) => {
    const [tab, setTab] = useState('colaborators')
    const [colaboratorData, setColaboratorData] = useState()
    const [rolesData, setRolesData] = useState()
    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState('')

    const colaboratorHeadingList = ['Nome Completo', 'Departamento', 'Cargo', 'Unidade', 'Status']
    const rolesHeadingList = ['Cargo', 'Departamento', 'Colaboradores']
    const heading = tab === 'colaborators' ? colaboratorHeadingList : rolesHeadingList

    async function getItems (route: string, select: string) {
        setLoading(true)
        try {
            const response = await api.get(route)

            const {data, status} = response
            if (status !== 200) throw new Error() 

            return data[select]

        } catch (err) {
            //setErro((err as any).message)
            setErro('Não foi possível recuperar dados. Tente mais tarde.')
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        async function getSource () {
            if (tab === 'colaborators') {
                //evitar fazer uma nova requisição se o usuario apenas estiver trocando de abas, sem alterar as paginas
                if (!colaboratorData) {
                    const data = await getItems('agents', 'items')
                    setColaboratorData(data)
                }
            }
    
            if (tab === 'roles') {
                if(!rolesData) {
                    const data = await getItems('roles', 'roles')
                    setRolesData(data)
                }
            }        
        }
        getSource()
    }, [tab, colaboratorData, rolesData])

    return (
        <NavigationContext.Provider value={{tab, setTab, loading, heading, erro, colaboratorData, rolesData}}>
            {children}
        </NavigationContext.Provider>
    )
}
//para não precisa fazer duas importaçoes onde for usar o contexto
//funciona como um hook
export const useNavigation = () => {
    const context = useContext(NavigationContext)
    return context
}