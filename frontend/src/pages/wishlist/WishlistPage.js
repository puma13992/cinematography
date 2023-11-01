import React, { useEffect, useState } from "react";
import { Col, Container, CardDeck } from "react-bootstrap";
import Movie from "../movies/Movie";
import Asset from "../../components/Asset";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";

function WishlistPage({ message, filter = "" }) {
	// Pass user information as a prop
	const [wishlistMovies, setWishlistMovies] = useState({ results: [] });
	const [hasLoaded, setHasLoaded] = useState(false);
	const { pathname } = useLocation();

	useEffect(() => {
		const fetchWishlistMovies = async () => {
			try {
				// Assuming user has an ID, update the filter to fetch movies on the user's wishlist.

				const { data } = await axiosReq.get(`/movies/?${filter}`);
				setWishlistMovies(data);
				setHasLoaded(true);
			} catch (err) {
				console.log(err);
			}
		};

		setHasLoaded(false);
		fetchWishlistMovies();
	}, [filter, pathname]);

	return (
		<div>
			<Col className="my-auto py-2 p-md-2">
				<Container>
					<h1>
						<i className="fa-solid fa-heart"></i> Wishlist
					</h1>
				</Container>
			</Col>
			{hasLoaded ? (
				<>
					{wishlistMovies.results.length ? (
						<CardDeck className="pb-4">
							{wishlistMovies.results.map((movie) => (
								<Movie
									key={movie.id}
									{...movie}
									setMovies={setWishlistMovies}
								/>
							))}
						</CardDeck>
					) : (
						<Container>
							<Asset src={NoResults} message={message} />
						</Container>
					)}
				</>
			) : (
				<Container>
					<Asset spinner />
				</Container>
			)}
		</div>
	);
}

export default WishlistPage;
