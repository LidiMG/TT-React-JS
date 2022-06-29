import {api} from "./UrlBase"

export const GetMovie = async () =>{
    try {
        const movie = await api.get('?apikey=1a2f5ca9&s=inception');
        return movie.data.Search;
    } catch (error) {
        alert(error);
    }
}