import styled from 'styled-components';
import PropTypes from 'prop-types';
import MobileHome from '../components/MobileHome';
import { useScrollPositions } from '../lib/useScrollPosition';
import PcHome from '../components/PcHome';

export default function HomePage({ windowSize }) {
  const { height, width } = windowSize;
  const scroll = useScrollPositions();

  const witchDevice = () => {
    if (width < 1000) {
      return <MobileHome scroll={scroll} />;
    }
    return <PcHome />;
  };

  return <>{witchDevice()}</>;
}

HomePage.propTypes = {
  windowSize: PropTypes.object,
};
