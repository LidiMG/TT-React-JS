import React from 'react';
import IconDelete from "../../assets/IconDelete.png"

import { ContainerTask, ContainerText, Status, ContainerImg } from './styled';

function CardTask({data, onClick, onDone}) {
  return (
  <ContainerTask status={data.done}>
      <ContainerText onClick={onDone}>
          <p>{data.task}</p>
          <Status status={data.done}>{data.done ? "Finalizada" : "Pendente"}</Status>
      </ContainerText>
      <ContainerImg onClick={onClick}>
      <img src={IconDelete} alt="Deletar tarefa" />
      </ContainerImg>
  </ContainerTask>
  );
}

export default CardTask;