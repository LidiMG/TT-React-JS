import React from 'react';
import Logo from '../../assets/Logo.png'
import { ContainerNav, NavImage, ImgLogo, NavNavigation, LinkStyle } from './styled';



function Nav() {
  return (
    <ContainerNav>
      <NavImage>
        <ImgLogo src={Logo} alt='Logo Have aNice Day!' />
      </NavImage>
      <NavNavigation>
        <LinkStyle to='/'>HOME</LinkStyle>
        <LinkStyle to='Cursos'>CURSOS</LinkStyle>
        {/* <NavLink to='Bio'>BIO</NavLink> */}
        <LinkStyle to='Contato'>CONTATO</LinkStyle>
      </NavNavigation>
    </ContainerNav>
  )
}

export default Nav;