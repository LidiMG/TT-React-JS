import styled from "styled-components";
import {NavLink} from 'react-router-dom';

export const ContainerNav = styled.div`
width: 100%;
height: 100px;
background: #350909;
display: flex;
align-items: center;
justify-content: space-between;
`

export const NavImage = styled.div`
height: 80px;
margin-left: 80px;
`
export const ImgLogo = styled.img`
max-height: 100%;
`
export const NavNavigation = styled.nav`
margin-right: 80px;
height: 80px;
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
`
export const LinkStyle = styled(NavLink)`
width: 100px;
height: 45px;
margin-right: 5px;
background: #FF4A57;
/* padding: 12px 20px; */
display: flex;
justify-content: center;
align-items: center;
font-size: 16px;
font-weight: 600;
color: white;
border-radius: 20% 0;
text-decoration: none;
:hover{
    color: #FF4A57;
    background: rgb(66, 5, 66);
}
`
