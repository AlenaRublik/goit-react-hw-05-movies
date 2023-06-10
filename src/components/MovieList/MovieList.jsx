import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Img, Item, Title } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, titleName, src }) => {
        return (
          <Item tabIndex={1} key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <Img src={src} alt={titleName} />
              <Title>{titleName}</Title>
            </Link>
          </Item>
        );
      })}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      titleName: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};
