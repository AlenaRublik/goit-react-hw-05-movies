import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'api_key=9d291fbdd7b1d90ccfd98af5f8a042de';

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}trending/all/day?${KEY}`);
    
    const moviesList = response.data.results.map(
      ({ id, name, title, poster_path }) => {
        let titleName = title || name;
        if (titleName.length > 25) {
          titleName = titleName.substring(0, 22) + '...';
        }
        let src = poster_path
          ? `https://image.tmdb.org/t/p/w200/${poster_path}`
          : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
        return { id, titleName, src };
      }
    );
    return moviesList;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchMovie = async movieId => {
  try {
    const response = await axios.get(`${BASE_URL}movie/${movieId}?${KEY}`);

    const { poster_path, title, vote_average, overview, genres } =
      response.data;
    const src = poster_path
      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
      : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
    const userScore = Math.ceil(vote_average * 10);

    const genresList = genres.map(({ id, name }) => <li key={id}>{name}</li>);

    return { src, title, userScore, overview, genresList };
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchCast = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/credits?${KEY}`
    );

    const cast = response.data.cast.map(
      ({ name, character, id, profile_path }) => {
        const src = profile_path
          ? `https://image.tmdb.org/t/p/w200/${profile_path}`
          : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
        return {
          name,
          character,
          id,
          src,
        };
      }
    );
    return cast;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchReviews = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/reviews?${KEY}`
    );

    const reviews = response.data.results.map(({ author, id, content }) => ({
      author,
      id,
      content,
    }));

    return reviews;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchMoviesByName = async movieName => {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?query=${movieName}&include_adult=false&language=en-US&page=1&${KEY}`
    );
    const moviesList = response.data.results.map(
      ({ id, name, title, poster_path }) => {
        let titleName = title || name;
        if (titleName.length > 25) {
          titleName = titleName.substring(0, 22) + '...';
        }
        let src = poster_path
          ? `https://image.tmdb.org/t/p/w200/${poster_path}`
          : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
        return { id, titleName, src };
      }
    );
    return moviesList;
  } catch (error) {
    console.log(error.message);
  }
};