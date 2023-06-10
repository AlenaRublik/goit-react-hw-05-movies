import PropTypes from 'prop-types';
import {
  Img,
  ImgWrap,
  InsideWrap,
  List,
  MovieTitle,
  OutsideWrap,
  Span,
  SubTitle,
} from './Movie.styled';

const Movie = ({ movieData }) => {
  return (
    <>
      <OutsideWrap>
        <ImgWrap>
          <Img src={movieData.src} alt={movieData.title} />
        </ImgWrap>
        <InsideWrap>
          <MovieTitle>{movieData.title}</MovieTitle>
          <div>
            <p>
              User score: <Span>{movieData.userScore}%</Span>
            </p>
            <SubTitle>Overview</SubTitle>
            <p>{movieData.overview}</p>
            <SubTitle>Genres</SubTitle>
            <List>{movieData.genresList}</List>
          </div>
        </InsideWrap>
      </OutsideWrap>
    </>
  );
};

Movie.propTypes = {
  movieData: PropTypes.shape({
    title: PropTypes.string,
    src: PropTypes.string.isRequired,
    userScore: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genresList: PropTypes.array.isRequired,
  }).isRequired,
};

export default Movie;
