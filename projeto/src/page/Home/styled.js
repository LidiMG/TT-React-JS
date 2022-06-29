import styled from 'styled-components';


export const ContainerHome = styled.div`
  width: 1100px;
  margin: 0 auto;
    padding-top: 36px;
    padding-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavigationLeft = styled.nav`
width: 600px;
height: 400px;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
`
export const NavigationRight = styled.nav`
width: 470px;
height: 400px;
display: flex;
justify-content: center;
align-items: center;
`
export const RedesSociais = styled.div`
width: 250px;
height: 60px;
margin: 90px auto auto 120px;
display: flex;
justify-content: space-between;
`
export const Icon = styled.a`
border: 1px solid #ccc;
width: 50px;
height: 50px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size: 28px;
text-decoration: none;
color: #ccc;
cursor: pointer;
:hover{
    color: #1C1C1C;
    border: 1px solid #1C1C1C;
}
`

export const Bio = styled.div`
width: 500px;
height: 150px;
margin-bottom: 110px;
h1{
    font-size: 40px;
    font-weight: 600;
    margin: 10px auto auto 70px;
}
p{
    font-size: 16px;
    font-weight: 400;
    margin: 10px 30px auto 70px;
}
`

export const Foto = styled.div`
width: 240px;
height: 340px;
margin-right: 50px;
background-color: bisque;
transform: rotateZ(10deg);
display: flex;
justify-content: center;
`
export const ImgFoto = styled.img`
width: 220px;
height: 300px;
margin-top: 10px;
`