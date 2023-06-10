import React from 'react';
import { Loader } from 'components';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/movieAPI/movieAPI';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    fetchTrendingMovies()
      .then(setTrendingMovies)
      .catch(console.log)
      .finally(() => setShowLoader(false));
  }, []);

  return (
    <section>
      <Loader visible={showLoader} />
      {trendingMovies.length && <MovieList movies={trendingMovies} />}
    </section>
  );
};

export default Home;