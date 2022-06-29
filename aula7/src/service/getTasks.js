import {api} from "./baseUrls.js";

export const GetTasks = async () =>{
    try {
        const response = await api.get('TODO')
        return response.data;
    } catch (error) {
        console.log("Erro do backend");
    }
}