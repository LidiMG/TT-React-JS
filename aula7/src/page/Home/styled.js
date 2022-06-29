import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

export const ContainerBox = styled.div`
width: 400px;
min-height: 600px;
background-color: #005875;
border-radius: 10px;
display: flex;
align-items: center;
flex-direction: column;
`

export const ContainerImg = styled.div`
width: 250px;
/* height: 70px; */
margin-top: 20px;
`

export const Image = styled.img`
width: 100%;
`

export const ContainerForm = styled.form`
display: flex;
align-items: center;
justify-content: center;
margin-top: 25px;
margin-bottom: 20px;
`

export const Input = styled.input`
width: 300px;
height: 35px;
padding: 5px;
`

export const Button = styled.button`
width: 40px;
height: 40px;
border: none;
padding: 5px;
border-radius: 15px;
margin-left: 5px;
background-color: #DD6F12;
img{
    width: 100%;
    :hover{
        color: #ccc;
    }
}
:hover{
    background-color: #019C09;
    cursor: pointer;
}
`