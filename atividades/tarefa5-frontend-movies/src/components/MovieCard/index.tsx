import { useEffect, useState, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import { getPosterImage } from "../../utils/getPosterImage";
import type { MovieDetails, TMDBMovieResponse } from "../../types/movies";

import styles from "./styles.module.css";

export const MovieCard = ({
	movie,
	onFavoriteToggle,
	isFavoritedProp,
}: {
	movie: TMDBMovieResponse | MovieDetails;
	onFavoriteToggle?: (id: number) => void;
	isFavoritedProp?: boolean;
}): JSX.Element => {
	const navigate = useNavigate();
	const [isFavoritedState, setIsFavoritedState] = useState(isFavoritedProp);

	useEffect(() => {
		setIsFavoritedState(isFavoritedProp);
	}, [isFavoritedProp]);

	const handleFavoriteToggle = () => {
		if (onFavoriteToggle) {
			onFavoriteToggle(movie.id);
			setIsFavoritedState(!isFavoritedState);
		}
	};

	return (
		<div className={styles.movieCardContainer}>
			<div
				className={styles.imageWrapper}
				onClick={() => navigate("/details/" + movie.id)}
			>
				<img
					src={getPosterImage(movie.poster_path)}
					alt={`Poster do filme ${movie.title}`}
					className={styles.movieImage}
				/>
				<div className={styles.imageOverlay} />
				<div className={styles.movieInfo}>
					<h2 className={styles.movieCardTitle}>{movie.title}</h2>
					<p className={styles.movieOverview}>{movie.overview}</p>

					{onFavoriteToggle && (
						<button
							className={`${styles.favoriteButton} ${
								isFavoritedState ? "liked" : ""
							}`}
							onClick={(e) => {
								e.stopPropagation();
								handleFavoriteToggle();
							}}
						>
							{isFavoritedState ? "💖" : "🤍"}
						</button>
					)}
				</div>
			</div>
		</div>
	);
};
