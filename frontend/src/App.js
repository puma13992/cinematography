import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import ResetPasswordForm from "./pages/auth/ResetPasswordForm";
import ResetPasswordConfirmForm from "./pages/auth/ResetPasswordConfirmForm";
import MovieCreateForm from "./pages/movies/MovieCreateForm";
import MovieEditForm from "./pages/movies/MovieEditForm";
import MoviePage from "./pages/movies/MoviePage";
import MoviesPage from "./pages/movies/MoviesPage";
import WishlistPage from "./pages/wishlist/WishlistPage";

function App() {
	const currentUser = useCurrentUser();
	const profile_id = currentUser?.profile_id || "";

	return (
		<div className={styles.App}>
			<NavBar />
			<Container className={styles.Main}>
				<Switch>
					<Route exact path="/" render={() => <h1>Welcome</h1>} />
					<Route
						exact
						path="/movies"
						render={() => (
							<MoviesPage message="No results found. Adjust the search keyword." />
						)}
					/>
					<Route
						exact
						path="/movies/create"
						render={() => <MovieCreateForm />}
					/>
					<Route
						exact
						path="/movies/:id/edit"
						render={() => <MovieEditForm />}
					/>
					<Route exact path="/movies/:id" render={() => <MoviePage />} />
					<Route exact path="/glossary" render={() => <h1>Glossary</h1>} />

					<Route exact path="/signin" render={() => <SignInForm />} />
					<Route exact path="/signup" render={() => <SignUpForm />} />
					<Route
						exact
						path="/dj-rest-auth/password/reset/"
						render={() => <ResetPasswordForm />}
					/>
					<Route
						exact
						path="/dj-rest-auth/password/reset/confirm/:uid/:token/"
						render={() => <ResetPasswordConfirmForm />}
					/>

					<Route
						exact
						path="/wishlist"
						render={() => (
							<WishlistPage
								message="No results found. Add a movie to your wishlist."
								filter={`wishlist__owner__profile=${profile_id}&ordering=wishlist__created_at&`}
							/>
						)}
					/>
					<Route render={() => <p>Page not found!</p>} />
				</Switch>
			</Container>
		</div>
	);
}

export default App;
