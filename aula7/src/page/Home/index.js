import React, { useEffect, useState } from 'react';
import { Container, ContainerBox, ContainerImg, ContainerForm, Image, Input, Button } from './styled';
import Have_a_Nice_Day from "../../assets/Have_a_Nice_Day.png"
import add_icon3 from "../../assets/add_icon3.png"
import CardTask from '../../components/CardTask';
import { GetTasks } from '../../service/getTasks';
import { AddTask } from '../../service/postTasks';
import { DeleteTask } from '../../service/deleteTask';
import { UpdateTask } from '../../service/putTask';

function Home() {
  const [task, setTask] = useState('');
  const [listTasks, setListTasks] = useState([]);

  const handleGetTasks = async () => {
    const response = await GetTasks();
    if (response){
      setListTasks(response);
    };
    console.log(response);
  };

  const handleAddTodoList = async (event) => {
    event.preventDefault();
    const data = {
      task: task,
      done: false,
      creatAt: new Date(),
    };

    await AddTask(data);

    setTask('')
    handleGetTasks()
  }

  const deleteTask = async (id) => {
    await DeleteTask(id);
    handleGetTasks();
  }

  const handleUpdateTask = async (item) =>{
    const data ={
      done: !item.done
    }
    await UpdateTask(item.id, data);
    handleGetTasks();
  }

  useEffect(() => {
    handleGetTasks();
  }, [])

  return (
    <Container>
      <ContainerBox>
        <ContainerImg>
          <Image src={Have_a_Nice_Day} alt="Logo Have a Nice Day" />
        </ContainerImg>

        <ContainerForm>
          <Input
            type="text"
            id="task"
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />
          <Button onClick={handleAddTodoList}>
            <img src={add_icon3} alt="Botão de adicionar task" />
          </Button>


        </ContainerForm>
          {listTasks.map(item => {
            return (
              <div key={item.id}>
                  <CardTask 
                  data={item} 
                  onClick={() => deleteTask(item.id)} 
                  onDone={() => handleUpdateTask(item)}/>
              </div>
            )
          })}
        


      </ContainerBox>
    </Container>
  );
}

export default Home;