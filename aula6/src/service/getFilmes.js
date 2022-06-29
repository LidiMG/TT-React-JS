import { api } from "./baseUrl"


export const GetFilmes = async () => {
    try {
        const response = await api.get('?apikey=1a2f5ca9&s=casablanca');
        console.log(response);
        return response.data.Search;
    } catch (error) {
        console.log(error);
    }

};

export const GetDetails = async (id) =>{
    try {
        const response = await api.get(`?apikey=1a2f5ca9&i=${id}`);
        return response.data;
    } catch (error) {
        alert('Deu erro!!!', error)
    }
}