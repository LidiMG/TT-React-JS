import styled from "styled-components";

export const ContainerTask = styled.div`
width: 350px;
height: 50px;
background-color: ${props => props.status ? "green" : "#e89900"};
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 10px;
margin: 10px 0 5px 0;
padding: 5px;
`;

export const ContainerText = styled.div`
width: 60%;
`;

export const Status = styled.p`
color: ${(props) => props.status ? "white" : "red"};
:hover{
    cursor: pointer;
}`;

export const ContainerImg = styled.button`
width: 40px;
height: 40px;
background-color: transparent;
border: none;
border-radius: 10px;
img{
    width: 100%;
}
:hover{
    background-color: darkred;
    cursor: pointer;
}
`;
