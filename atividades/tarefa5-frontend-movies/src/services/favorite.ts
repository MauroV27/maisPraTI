const FAVORITE_KEY = "favoriteMovies";

export const getFavorites = (): number[] => {
	const favorites = localStorage.getItem(FAVORITE_KEY);
	return favorites ? JSON.parse(favorites) : [];
};

export const addFavorite = (movieId: number): void => {
	const favoriteMovies = getFavorites();
	if (!favoriteMovies.includes(movieId)) {
		favoriteMovies.push(movieId);
		localStorage.setItem(FAVORITE_KEY, JSON.stringify(favoriteMovies));
	}
};

export const removeFavorite = (movieId: number): void => {
	const favoriteMovies = getFavorites();

	const updatedFavorites = favoriteMovies.filter(
		(id: number) => id !== movieId
	);

	localStorage.setItem(FAVORITE_KEY, JSON.stringify(updatedFavorites));
};

export const isFavorited = (movieId: number): boolean => {
	const favoriteMovies = getFavorites();
	return favoriteMovies.includes(movieId);
};
