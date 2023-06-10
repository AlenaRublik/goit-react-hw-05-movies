import PropTypes from 'prop-types';
import { Img, Item, Name, Character } from './Actor.styled';

const Actor = ({ name, character, src }) => {
  return (
    <Item>
      <Img src={src} alt={name} />
      <Name>{name}</Name>
      <Character>{character}</Character>
    </Item>
  );
};

Actor.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Actor;
