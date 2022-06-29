import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Input from '../../components/Input';
import { GetFilmes } from '../../service/getFilmes';
import { ContainerCard, ContainerInput } from './styled';


function Home() {

    const [filmes, setFilmes] = useState([]);
    const [titulo, setTitulo] = useState('');

    const navigation = useNavigate();

    const handleGetFilmes = async () => {
        const response = await GetFilmes();
        console.log(response);
        setFilmes(response);
    };

    const handleGetDetails = (id) => {
        navigation(`details/${id}`);
    }

    const handleName = (value) => {
        console.log(value);
        setTitulo(value);
    }

    useEffect(() => {
        handleGetFilmes();
    }, []);

    return (
        <>
            <ContainerInput>
                <Input id="name" label="Nome" setValue={handleName} placeholder="Informe o filme" />
            </ContainerInput>

            <ContainerCard>
                {filmes.map((item) => {
                    return (
                        <div key={item.imdbID}>
                            <Card filme={item} />
                            <button onClick={() => handleGetDetails(item.imdbID)}>Saiba Mais</button>
                        </div>
                    );
                })}
            </ContainerCard>
        </>
    );
}

export default Home