import { useEffect, useState, type JSX } from "react";
import type { TMDBMovieResponse } from "../../types/movies";
import { MovieCard } from "../../components/MovieCard";
import { CardSliderContainer } from "../../components/CardSliderContainer";
import { MovieCardSkeleton } from "../../components/Skeletons/MovieCardSkeleton";
import { fetchPopularMovies } from "../../services/movies";

import "./style.module.css";

export const Home = (): JSX.Element => {
	const [popularMoviesList, setPopularMoviesList] = useState<
		TMDBMovieResponse[]
	>([]);

	const [isLoadingPopularMovies, setIsLoadingPopularMovies] =
		useState<boolean>(true);

	const fetchPopularMoviesList = async (): Promise<void> => {
		setIsLoadingPopularMovies(true);
		const popularMoviesList = await fetchPopularMovies({
			language: "pt-br",
		});

		setPopularMoviesList(popularMoviesList.results);
		setIsLoadingPopularMovies(false);
	};

	useEffect(() => {
		fetchPopularMoviesList();
	}, []);

	return (
		<div className="homeContainer">
			<div className="favoriteMoviesList movieListContainer">
				<h2 className="movieListName">Em Alta</h2>
				<CardSliderContainer
					items={popularMoviesList}
					renderItem={(movie) => <MovieCard movie={movie} />}
					skeletonItem={<MovieCardSkeleton />}
					skeletonCount={20}
					isLoading={isLoadingPopularMovies}
				/>
			</div>

			<div className="favoriteMoviesList movieListContainer">
				<h2 className="movieListName">Recomendaçõs</h2>
				<CardSliderContainer
					items={popularMoviesList}
					renderItem={(movie) => <MovieCard movie={movie} />}
				/>
			</div>
		</div>
	);
};
