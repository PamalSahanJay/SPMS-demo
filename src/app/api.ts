import axios from 'axios';

const API_ENDPOINT =    `https://www.omdbapi.com/?apikey=d7e79b47}`;

export const fetchMovies = async (movieName: string) : Promise<any> => {
    return axios.get(`https://www.omdbapi.com/?apikey=d7e79b47&s=spider`);
}