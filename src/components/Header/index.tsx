import Image from 'next/image'
import React from 'react'
import { UserContainer, HeaderContainer, Avatar } from './style'
import pedidopagologo from '../../assets/pedidopagologo.png'

const Header = () => {
  return (
    <HeaderContainer>
        <div className='header-content'>
            <div>
                <Image src={pedidopagologo} height={30} width={30} objectFit='cover' alt='Pedido Pago Logo'/>
            </div>
            <UserContainer>
                <Avatar>
                    LZ
                </Avatar>
                <div className='user-box'>
                    <div className='username'>
                        Luiz Zlochevsky
                    </div>
                    <div className='description'>
                        meus dados
                    </div>
                </div>
            </UserContainer>
        </div>
    </HeaderContainer>
  )
}

export default Header