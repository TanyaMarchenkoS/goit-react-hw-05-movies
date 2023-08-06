import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/moviesAPI';
import { RotatingLines } from 'react-loader-spinner';
import MovieList from 'components/MovieList/MovieList';
import { Container, Title, Loader, BackgroundImage } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true)
        const { results } = await getTrendingMovies();
        setTrendingMovies(results)
      } catch (error) {
        console.log(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchTrendingMovies()
  }, [])

  return (
    <Container>
      <BackgroundImage />
      <Title>Trending today</Title>
        <MovieList  movies={trendingMovies}/>
          {loading && 
            <Loader>
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
              />
          </Loader>
          }
    </Container>
  )
}

export default Home;
