import React from "react";
import {Container, Image, ContainerImage, NavStyle, LinkStyle} from "./styled";


function Nav() {
    return (
        <Container> 
            <ContainerImage>
            <Image src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="Logo Netflix"/>
            </ContainerImage>
    <NavStyle>
        <LinkStyle to='/'>Home</LinkStyle>
        <LinkStyle to="filmes">Filmes</LinkStyle>
        <LinkStyle to="login">Login</LinkStyle>
    </NavStyle>
    </Container>
);}

export default Nav;