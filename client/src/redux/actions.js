import axios from 'axios';
export const GET_MOVIES = 'GET_MOVIES'

export const getMovies = () => async dispatch => {
    let json = await axios.get('/movies')
    try {
        return dispatch({ type: GET_MOVIES, payload: json.data })
    } catch (error) {
        console.log(error.message)
    }
}