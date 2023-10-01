import styled from '@emotion/styled';
import { Outlet, useMatch } from 'react-router-dom';

import Navigation from '../components/Navigation';
import Spacer from '../components/Spacer';

const MobileView = () => {
  const settingMatch = useMatch('/profile/:id');
  const loginMatch = useMatch('/login');

  const matchRoute = settingMatch || loginMatch;
  return (
    <Container>
      <Wrapper>
        <Outlet />
      </Wrapper>
      {!matchRoute && <Navigation />}
    </Container>
  );
};

export default MobileView;

const Container = styled.main`
  height: 100%;
  max-width: 480px;
  width: auto;
  margin: 0 auto;
  min-height: 100%;
  overflow: hidden;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Wrapper = styled.div`
  /* height: calc(100% - 20px); */
  height: 100%;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;
