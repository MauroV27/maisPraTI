import { Route, Routes } from "react-router-dom";
import "./global.css";
import { Home } from "./pages/home/home";
import { Details } from "./pages/details/details";
import { Favorites } from "./pages/favorites";
import { NavBarMenu } from "./components/NavBar";
import { Search } from "./pages/Search";

function App() {
	return (
		<>
			<NavBarMenu />
			<div className="pageContainer">
				<Routes>
					<Route index path="/home" element={<Home />} />

					<Route path="/details/:movieId" element={<Details />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="/search" element={<Search />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
