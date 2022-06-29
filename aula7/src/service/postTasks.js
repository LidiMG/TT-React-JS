import {api} from './baseUrls';


export const AddTask = async (data) => {
    try {
        await api.post('TODO', data);
    } catch (error) {
        alert('Não foi possível adicionar tarefa...')
    }
}