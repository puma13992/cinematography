import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Movie from "./Movie";
import CommentCreateForm from "../comments/CommentCreateForm";
import Comment from "../comments/Comment";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import ScrollToTop from "../../components/ScrollToTop";

function MoviePage() {
	const { id } = useParams();
	const [movie, setMovie] = useState({ results: [] });

	const currentUser = useCurrentUser();
	const profile_image = currentUser?.profile_image;
	const [comments, setComments] = useState({ results: [] });

	useEffect(() => {
		const handleMount = async () => {
			try {
				const [{ data: movie }, { data: comments }] = await Promise.all([
					axiosReq.get(`/movies/${id}`),
					axiosReq.get(`/comments/?movie=${id}`),
				]);
				setMovie({ results: [movie] });
				setComments(comments);
			} catch (err) {
				console.log(err);
			}
		};

		handleMount();
	}, [id]);

	return (
		<Row>
			<Col className="py-2">
				<Movie {...movie.results[0]} setMovies={setMovie} moviePage />
				<Container className="pb-4 pt-4">
					{currentUser ? (
						<CommentCreateForm
							profile_id={currentUser.profile_id}
							profileImage={profile_image}
							movie={id}
							setMovie={setMovie}
							setComments={setComments}
						/>
					) : comments.results.length ? (
						<h3>Comments</h3>
					) : null}
					{comments.results.length ? (
						<InfiniteScroll
							children={comments.results.map((comment) => (
								<Comment
									key={comment.id}
									{...comment}
									setMovie={setMovie}
									setComments={setComments}
								/>
							))}
							dataLength={comments.results.length}
							loader={<Asset spinner />}
							hasMore={!!comments.next}
							next={() => fetchMoreData(comments, setComments)}
						/>
					) : currentUser ? (
						<span>No comments yet, be the first to comment!</span>
					) : (
						<span>No comments... yet</span>
					)}
				</Container>
			</Col>
			<div>
				<ScrollToTop />
			</div>
		</Row>
	);
}

export default MoviePage;
