import axios from "axios";

const BASE_API = "https://api.themoviedb.org/3";
const BEARER_TOKEN = process.env.TMDB_API_TOKEN;

export const api = axios.create({
	baseURL: BASE_API,
	timeout: 5000,
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${BEARER_TOKEN}`,
	},
});
