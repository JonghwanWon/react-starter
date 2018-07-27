import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../../logo.svg';

import AppTitle from './AppTitle';

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`;

const AppPage = styled.div`
  text-align: center;
`;

const AppLogo = styled.img`
  animation: ${AppLogoSpin} infinite 20s linear;
  height: 80px;
`;

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const AppIntro = styled.p`
  font-size: large;
`;

const App = () => (
  <AppPage>
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
      <AppTitle username="React" />
    </AppHeader>
    <AppIntro>
      To get started, edit
      <code>
src/App.js
      </code>
      and save to reload.
    </AppIntro>
  </AppPage>
);

export default App;
