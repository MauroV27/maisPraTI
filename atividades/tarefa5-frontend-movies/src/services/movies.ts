import { api } from "./api.ts";
import type {
	MovieDetails,
	MoviesFilters,
	TMDBMovieResponse,
} from "../types/movies";
import type { Pagination } from "../types/pagination.ts";

export const fetchPopularMovies = async (
	params: MoviesFilters
): Promise<Pagination<TMDBMovieResponse>> => {
	const response = await api.get("/movie/popular", {
		params,
	});

	console.log(123, response);

	return response.data;
};

export const fetchMovieDetails = async (
	movieId: number,
	params: MoviesFilters
): Promise<MovieDetails> => {
	const response = await api.get(`/movie/${movieId}`, {
		params,
	});

	return response.data;
};

export const searchMovie = async (
	search: string
): Promise<Pagination<TMDBMovieResponse>> => {
	const response = await api.get(
		`/search/movie?query=${search}&include_adult=false&language=pt-BR&page=1`
	);

	return response.data;
};
