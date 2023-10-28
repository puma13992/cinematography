import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import ResetPasswordForm from "./pages/auth/ResetPasswordForm";
import ResetPasswordConfirmForm from "./pages/auth/ResetPasswordConfirmForm";

function App() {
	return (
		<div className={styles.App}>
			<NavBar />
			<Container className={styles.Main}>
				<Switch>
					<Route exact path="/" render={() => <h1>Home page</h1>} />
					<Route exact path="/movies" render={() => <h1>Movies</h1>} />
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
					<Route render={() => <p>Page not found!</p>} />
				</Switch>
			</Container>
		</div>
	);
}
export default App;
