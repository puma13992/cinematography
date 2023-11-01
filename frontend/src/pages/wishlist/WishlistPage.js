import React, { useEffect, useState } from "react";
import { Form, Row, Col, Container } from "react-bootstrap";
import Movie from "../movies/Movie";
import Asset from "../../components/Asset";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Searchbar from "../../components/Searchbar";
import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

function WishlistPage({ message, filter = "" }) {
	// Pass user information as a prop
	const [wishlistMovies, setWishlistMovies] = useState({ results: [] });
	const [hasLoaded, setHasLoaded] = useState(false);
	const { pathname } = useLocation();

	const [query, setQuery] = useState("");
	const [category, setCategory] = useState("");

	const maxContentLength = 150;

	useEffect(() => {
		const fetchWishlistMovies = async () => {
			try {
				const { data } = await axiosReq.get(
					`/movies/?${filter}search=${query}&category=${category}`
				);

				setWishlistMovies(data);
				setHasLoaded(true);
			} catch (err) {
				console.log(err);
			}
		};

		setHasLoaded(false);
		fetchWishlistMovies();

		const timer = setTimeout(() => {
			fetchWishlistMovies();
		}, 1000);

		return () => {
			clearTimeout(timer);
		};
	}, [filter, query, category, pathname]);

	return (
		<div>
			<Row>
				<Col className="my-auto py-2 p-md-2">
					<Container>
						<h1>
							<i className="fa-solid fa-heart"></i> Wishlist
						</h1>
					</Container>
				</Col>
			</Row>
			<Row>
				<Container>
					<Searchbar
						query={query}
						setQuery={setQuery}
						placeholderText="Search movies by title, release, director, username or keywords"
					/>
				</Container>
			</Row>
			<Row className="d-flex flex-row flex-fill">
				<Col>
					<p>Filter your wihslist movies by genre category:</p>
					<Form className="flex-fill">
						<Form.Control
							size="sm"
							as="select"
							placeholder="Choose..."
							value={category}
							onChange={(event) => setCategory(event.target.value)}
						>
							<option value="">All Movies</option>
							<option>Drama</option>
							<option>Documentation</option>
							<option>Biography</option>
							<option>Animation</option>
							<option>Experimental Cinema</option>
						</Form.Control>
					</Form>
				</Col>
			</Row>

			<Row className="py-4">
				<Col>
					{hasLoaded ? (
						<>
							{wishlistMovies.results.length ? (
								<InfiniteScroll
									dataLength={wishlistMovies.results.length}
									loader={<Asset spinner />}
									hasMore={!!wishlistMovies.next}
									next={() => fetchMoreData(wishlistMovies, setWishlistMovies)}
									className="overflow-hidden"
								>
									<Row>
										{wishlistMovies.results.map((movie) => (
											<Col
												key={movie.id}
												lg={4}
												md={6}
												sm={12}
												className="pb-4 d-flex"
											>
												<Movie
													{...movie}
													content={
														movie.content.slice(0, maxContentLength) +
														(movie.content.length > maxContentLength
															? "..."
															: "")
													}
													setMovies={setWishlistMovies}
												/>
											</Col>
										))}
									</Row>
								</InfiniteScroll>
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
				</Col>
			</Row>
		</div>
	);
}

export default WishlistPage;
