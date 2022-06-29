import {api} from './baseUrls';

export const DeleteTask = async(id) => {
    try {
        await api.delete(`TODO/${id}`);
        alert('Tarefa excluída!')
    } catch (error) {
        alert('Não foi possível excluir a tarefa')
    }
}