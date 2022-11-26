import axios from "axios";
import { deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMoviesFailure, getMoviesStart } from "./MovieAction";

export const getMovies = async ( user, dispatch) => {
    dispatch(getMoviesStart());
    try {
        const res = await axios.get("/movies", {
            headers: {
                token:
                "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            },
        });
        dispatch(getMoviesSuccess(res.data));
    } catch(err) {
        dispatch(getMoviesFailure());
    }
};

//delete
export const deleteMovie = async ( id, dispatch) => {
    dispatch(deleteMovieStart());
    try {
        await axios.get("/movies"+id, {
            headers: {
                token:
                "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            },
        });
        dispatch(deleteMovieSuccess(id));
    } catch(err) {
        dispatch(deleteMovieFailure());
    }
};