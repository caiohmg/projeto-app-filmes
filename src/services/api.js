import axios from 'axios';

//url Filmes em Cartaz:
//https://api.themoviedb.org/3
//movie/now_playing?api_key=abee79caf6ed381c5ccd2f648094915e&language=pt-BR&page=1

export const key = 'abee79caf6ed381c5ccd2f648094915e'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})
export default api;