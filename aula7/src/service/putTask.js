import {api} from './baseUrls';

export const UpdateTask = async (id, data) => {
    try {
        await api.put(`TODO/${id}`, data);
    } catch (error) {
        alert('Não foi possível atualizar a tarefa');
    }
}