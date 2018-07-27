import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
  font-size: 1.5em;
`;

const AppTitle = ({ username }) => (
  <Title>
    {`Welcome to ${username}`}
  </Title>
);

AppTitle.propTypes = {
  username: PropTypes.string,
};

AppTitle.defaultProps = {
  username: 'Tester',
};

export default AppTitle;
