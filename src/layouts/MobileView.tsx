import styled from '@emotion/styled';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Header from '../components/Header';

const MobileView = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Navigation />
    </Container>
  );
};

export default MobileView;

const Container = styled.main`
  border: 1px solid red;
  height: 100%;
  max-width: 480px;
  width: auto;
  position: relative;
  margin: 0 auto;
  min-height: 100%;
`;

const Wrapper = styled.div`
  height: calc(100% - 120px);
  overflow: auto;
`;
