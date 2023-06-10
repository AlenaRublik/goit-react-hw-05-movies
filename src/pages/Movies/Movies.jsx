import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Form from 'components/Form/Form';
import { Loader } from 'components';
import { fetchMoviesByName } from 'services/movieAPI/movieAPI';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [movies, setMovies] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (!query) return;

    fetchMoviesByName(query)
      .then(setMovies)
      .finally(() => setShowLoader(false));
  }, [query]);

  const updateParams = params => {
    setSearchParams(params);
  };

  return (
    <section>
      <Form updateParams={updateParams} />
      <Loader visible={showLoader} />
      {query && <MovieList movies={movies} />}
    </section>
  );
};

export default Movies;