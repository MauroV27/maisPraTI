import { useEffect, useState, type JSX } from "react";
import { useParams } from "react-router-dom";

import styles from "./style.module.css";
import { fetchMovieDetails } from "../../services/movies";
import type { MovieDetails } from "../../types/movies";

import {
	addFavorite,
	removeFavorite,
	isFavorited,
} from "../../services/favorite";

export const Details = (): JSX.Element => {
	const params = useParams<{ movieId: string }>();
	const [isFavoritedState, setIsFavoritedState] = useState(false);

	const [isLoadingPage, setIsLoadingPage] = useState<boolean>(true);

	const [movie, setMovie] = useState<MovieDetails>();

	// Verifica se o filme está favoritado ao carregar a página
	useEffect(() => {
		if (!movie || !movie.id) return;

		const favorited = isFavorited(Number(movie.id));
		setIsFavoritedState(favorited);
	}, [movie]);

	const toggleFavorite = () => {
		if (!movie || !movie.id) return;

		if (isFavoritedState) {
			removeFavorite(movie.id);
		} else {
			addFavorite(movie.id);
		}

		setIsFavoritedState(!isFavoritedState);
	};

	const handleRequestMovieDetailsData = async (): Promise<void> => {
		console.log(params.movieId);
		const movieId = Number(params.movieId);

		const movieData = await fetchMovieDetails(movieId, {
			language: "pt-br",
		});

		setIsLoadingPage(false);
		setMovie(movieData);
	};

	useEffect(() => {
		handleRequestMovieDetailsData();
	}, []);

	if (isLoadingPage || !movie) {
		return (
			<div className={styles.LoadingPage}>
				<div className={styles.loader}>
					<svg className={styles.circular} viewBox="25 25 50 50">
						<circle
							className={styles.path}
							cx="50"
							cy="50"
							r="20"
							fill="none"
							strokeWidth="4"
							strokeMiterlimit="10"
						/>
					</svg>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.detailsPageContainer}>
			<div
				className={styles.hero}
				style={{
					backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
				}}
			>
				<div className={styles.heroOverlay}>
					<img
						src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
						alt={movie.title}
						className={styles.poster}
					/>
					<div className={styles.info}>
						<h1>{movie.title}</h1>
						<h3 className={styles.tagline}>{movie?.tagline}</h3>
						<p className={styles.rating}>
							⭐ {movie.vote_average.toFixed(1)} / 10 (
							{movie.vote_count} votos)
						</p>
						<p className={styles.genres}>
							{movie?.genres.map((g) => g.name).join(", ")}
						</p>
						<p className={styles.meta}>
							{movie?.runtime} min •{" "}
							{movie.original_language.toUpperCase()} •{" "}
							{movie.release_date}
						</p>

						<button
							onClick={toggleFavorite}
							className={styles.favoriteButton}
							aria-label={
								isFavoritedState
									? "Remover dos favoritos"
									: "Adicionar aos favoritos"
							}
						>
							{isFavoritedState
								? "💖 Remover dos favoritos"
								: "🤍 Adicionar aos favoritos"}
						</button>
					</div>
				</div>
			</div>

			{/* Overview */}
			<div className={styles.section}>
				<h2>Sinopse</h2>
				<p>{movie.overview}</p>
			</div>

			{/* Production Companies */}
			<div className={styles.section}>
				<h2>Produzido por</h2>
				<div className={styles.companies}>
					{movie?.production_companies.map((company) => (
						<div key={company.id} className={styles.company}>
							{company.logo_path ? (
								<img
									src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
									alt={company.name}
								/>
							) : (
								<span>{company.name}</span>
							)}
						</div>
					))}
				</div>
			</div>

			{/* Extra Info */}
			<div className={styles.section}>
				<h2>Informações técnicas</h2>
				<ul>
					<li>
						<strong>Idioma original:</strong>{" "}
						{movie.original_language.toUpperCase()}
					</li>
					<li>
						<strong>Orçamento:</strong> $
						{movie?.budget.toLocaleString()}
					</li>
					<li>
						<strong>Receita:</strong> $
						{movie?.revenue.toLocaleString()}
					</li>
					<li>
						<strong>Status:</strong> {movie?.status}
					</li>
					<li>
						<strong>IMDB:</strong>{" "}
						<a
							href={`https://www.imdb.com/title/${movie.imdb_id}`}
							target="_blank"
							rel="noreferrer"
						>
							{movie?.imdb_id}
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
