import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import mapMarkerImg from '../../images/Icon-map.svg';
import { Container } from './styles';

const SideBar: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Container>
      <Link to="/">
      <img src={mapMarkerImg} alt="Happy" />
      </Link>

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </Container>
  );
};

export default SideBar;
