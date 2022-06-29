import { Container, ContainerLogo, Logo, List, ListItem, Link } from "./styled";

const Nav = () =>{

    return(
        <Container>
            <ContainerLogo>
            <Logo src="https://st.depositphotos.com/1008709/4676/i/600/depositphotos_46768767-stock-photo-hands-in-art-logo.jpg"/>
            </ContainerLogo>
            <List>
                <ListItem>
                    <Link href="#">Home</Link>
                </ListItem>
                <ListItem>
                    <Link href="#">Lista de Filmes</Link>
                </ListItem>
                <ListItem>
                    <Link href="#">Cadastro</Link>
                </ListItem>
            </List>
        </Container>
    )
}

export default Nav;