import type { JSX } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export const NavBarMenu = (): JSX.Element => {
	return (
		<nav className={styles.app_navbar}>
			<h2 className={styles.app_navbar_title}>
				<Link to="/home">Lista Filmes</Link>
			</h2>

			<div className={styles.navbar_actions}>
				<Link to={"/favorites"}>Favoritos</Link>
				<Link to={"/search"}>Pesquisar</Link>
			</div>
		</nav>
	);
};
