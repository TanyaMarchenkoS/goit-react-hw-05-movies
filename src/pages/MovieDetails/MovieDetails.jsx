import MovieCard from 'components/MovieCard/MovieCard';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

import { getMovieDetails } from 'services/moviesAPI';

import {
  AddInfo,
  Container,
  StyledLinkBtn,
  Title,
  Loader
} from './MovieDetails.styled';
import {
  List,
  ListItem,
  StyledLink,
} from 'components/MovieList/MovieList.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async movieId => {
      try {
        setLoading(true);
        const movieDetails = await getMovieDetails(movieId);
        setMovieDetails(movieDetails);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails(movieId);
  }, [movieId]);

  return (
    <Container>
      <StyledLinkBtn to={backLinkLocationRef.current}>
        &larr; Go back
      </StyledLinkBtn>

      {loading ? (
        <Loader>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </Loader>
      ) : (
        <MovieCard movieDetails={movieDetails} />
      )}

      <AddInfo>
        <Title>Additional information</Title>
        <List>
          <ListItem>
            <StyledLink to="cast" state={backLinkLocationRef.current}>
              Cast
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="reviews">Reviews</StyledLink>
          </ListItem>
        </List>
      </AddInfo>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;