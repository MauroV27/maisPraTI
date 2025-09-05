import { useEffect, useState, type JSX } from "react";
import {
	addFavorite,
	getFavorites,
	removeFavorite,
} from "../services/favorite";
import type { MovieDetails } from "../types/movies";
import { fetchMovieDetails } from "../services/movies";
import { MovieCard } from "../components/MovieCard";
import { MovieCardSkeleton } from "../components/Skeletons/MovieCardSkeleton";
import { CardSliderContainer } from "../components/CardSliderContainer";

// Em outro componente
export const Favorites = (): JSX.Element => {
	const [favoriteMovies, setFavoriteMovies] = useState<MovieDetails[]>([]);
	const [isLoadingfavoritedMovies, setIsLoadingFavoritedMovies] =
		useState<boolean>(true);

	// Função para buscar os detalhes dos filmes favoritados
	const fetchFavoriteMovies = async () => {
		const favoriteMovieIds = getFavorites();
		if (favoriteMovieIds.length === 0) return;

		const movieDetailsPromises = favoriteMovieIds.map((movieId) =>
			fetchMovieDetails(movieId, { language: "pt-br" })
		);

		const movieDetails = await Promise.all(movieDetailsPromises);
		setFavoriteMovies(movieDetails.map((movie) => movie));
		setIsLoadingFavoritedMovies(false);
	};

	useEffect(() => {
		fetchFavoriteMovies();
	}, []);

	const handleFavoriteToggle = (movieId: number) => {
		const currentFavorites = getFavorites();
		if (currentFavorites.includes(movieId)) {
			removeFavorite(movieId);
		} else {
			addFavorite(movieId);
		}
		fetchFavoriteMovies();
	};

	return (
		<div>
			<h1>Meus Filmes Favoritos</h1>
			<div className="movie-list">
				{favoriteMovies.length === 0 ? (
					<p>Você ainda não tem filmes favoritados.</p>
				) : (
					<CardSliderContainer
						items={favoriteMovies}
						renderItem={(movie: MovieDetails) => (
							<MovieCard
								key={movie.id}
								movie={movie}
								isFavoritedProp={true}
								onFavoriteToggle={handleFavoriteToggle}
							/>
						)}
						skeletonItem={<MovieCardSkeleton />}
						skeletonCount={20}
						isLoading={isLoadingfavoritedMovies}
					/>
				)}
			</div>
		</div>
	);
};
