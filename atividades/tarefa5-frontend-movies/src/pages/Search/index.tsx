import { useState } from "react";

import { MovieCard } from "../../components/MovieCard";
import { searchMovie } from "../../services/movies";
import type { TMDBMovieResponse } from "../../types/movies";

import styles from "./SearchPage.module.css";
import { CardSliderContainer } from "../../components/CardSliderContainer";
import { MovieCardSkeleton } from "../../components/Skeletons/MovieCardSkeleton";
import {
	addFavorite,
	getFavorites,
	isFavorited,
	removeFavorite,
} from "../../services/favorite";

export const Search = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState<TMDBMovieResponse[]>([]);
	const [loading, setLoading] = useState(false);

	// Função para realizar a busca do filme
	const handleSearch = async () => {
		if (!searchQuery.trim()) return; // Se a consulta estiver vazia, não faz nada
		setLoading(true);

		try {
			const response = await searchMovie(searchQuery.trim());
			setSearchResults(response.results);
		} catch (error) {
			console.error("Erro ao buscar filmes", error);
		} finally {
			setLoading(false);
		}
	};

	const handleFavoriteToggle = (movieId: number) => {
		const currentFavorites = getFavorites();
		if (currentFavorites.includes(movieId)) {
			removeFavorite(movieId);
		} else {
			addFavorite(movieId);
		}
	};

	return (
		<div className={styles.searchPageContainer}>
			<div className={styles.searchBar}>
				<input
					type="text"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					placeholder="Digite o nome do filme..."
					className={styles.searchInput}
				/>
				<button onClick={handleSearch} className={styles.searchButton}>
					🔍
				</button>
			</div>

			{loading ? (
				<div className={styles.loaderContainer}>
					<div className={styles.loader}></div>
				</div>
			) : (
				<div className={styles.resultsContainer}>
					{searchResults.length === 0 ? (
						<p className={styles.noResults}>
							Nenhum filme encontrado.
						</p>
					) : (
						<CardSliderContainer
							items={searchResults}
							renderItem={(movie: TMDBMovieResponse) => (
								<MovieCard
									key={movie.id}
									movie={movie}
									isFavoritedProp={isFavorited(movie.id)}
									onFavoriteToggle={handleFavoriteToggle}
								/>
							)}
							skeletonItem={<MovieCardSkeleton />}
							skeletonCount={20}
							isLoading={loading}
						/>
					)}
				</div>
			)}
		</div>
	);
};
