export interface MoviesFilters {
	page?: number;

	language?: "en" | "pt-br";
}

// Tipo para cada item dentro de "results"
export interface TMDBListItem {
	account_object_id: string;
	adult: number; // geralmente booleano, mas se a API retorna 0 ou 1, mantém-se como number
	average_rating: number;
	created_at: string;
	description: string;
	featured: number;
	id: number;
	iso_3166_1: string;
	iso_639_1: string;
	name: string;
	number_of_items: number;
	public: number;
	revenue: string;
	runtime: number;
	sort_by: number;
	updated_at: string;
}

// Tipo para o objeto principal da resposta
export interface TMDBResponse {
	page: number;
	results: TMDBListItem[];
	total_pages: number;
	total_results: number;
}

export interface TMDBMovieResponse {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface MovieDetails {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: null | any; // Pode ser detalhado se necessário
	budget: number;
	genres: Genre[];
	homepage: string;
	id: number;
	imdb_id: string;
	origin_country: string[]; // Ex: ['US']
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	release_date: string; // formato: YYYY-MM-DD
	revenue: number;
	runtime: number;
	spoken_languages: SpokenLanguage[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface Genre {
	id: number;
	name: string;
}

export interface ProductionCompany {
	id: number;
	logo_path: string | null;
	name: string;
	origin_country: string;
}

export interface ProductionCountry {
	iso_3166_1: string;
	name: string;
}

export interface SpokenLanguage {
	english_name: string;
	iso_639_1: string;
	name: string;
}
