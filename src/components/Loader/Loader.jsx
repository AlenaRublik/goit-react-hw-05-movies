import { ThreeCircles } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { Wrapper } from './Loader.styled';

const Loader = ({ visible }) => {
  return (
    <Wrapper>
      <ThreeCircles
        height="100"
        width="100"
        color="#e0228e"
            wrapperStyle={{}}
        wrapperClass=""
        visible={visible}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
  </Wrapper>
  );
};

Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Loader;
