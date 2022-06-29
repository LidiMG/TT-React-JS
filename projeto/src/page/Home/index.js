import React from 'react';
import PortfolioIMG from '../../assets/PortfolioIMG.jpg';
import { ContainerHome, NavigationLeft, NavigationRight, RedesSociais, Icon, Bio, Foto, ImgFoto } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";



function Home() {
  return (
    <ContainerHome>
      <NavigationLeft>
        <RedesSociais>
          <Icon href='https://www.linkedin.com/in/lidianemgomes/' target='_blank' alt='Logo LinkedIn'><FontAwesomeIcon icon={faLinkedin} /></Icon>
          <Icon href='https://github.com/LidiMG' target='_blank' alt='Logo GitHub'><FontAwesomeIcon icon={faGithub} /></Icon>
          <Icon href='https://www.twitter.com' target='_blank' alt='Logo Twitter'><FontAwesomeIcon icon={faTwitter} /></Icon>
          <Icon href='https://www.facebook.com' target='_blank' alt='Logo Facebook'><FontAwesomeIcon icon={faFacebook} /></Icon>
        </RedesSociais>
        <Bio>
          <h1>Lidiane M. Gomes</h1>
          <p>Bibliotecária, um pouco artista e agora estudando programação.</p>
        </Bio>
      </NavigationLeft>
      <NavigationRight>
        <Foto>
          <ImgFoto src={PortfolioIMG} alt='Foto da Lidiane' />
        </Foto>
      </NavigationRight>
    </ContainerHome>
  );
}

export default Home;