import axios from 'axios';
export const GET_MOVIES = 'GET_MOVIES'

export const getMovies = () => async dispatch => {
    let json = await axios.get('http://localhost:3001/movies')
    try {
        return dispatch({ type: GET_MOVIES, payload: json.data })
    } catch (error) {
        console.log(error.message)
    }
}