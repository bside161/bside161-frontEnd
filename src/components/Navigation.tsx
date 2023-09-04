import styled from '@emotion/styled';
import BottomBg from '../assets/images/bottom_bg.png';
import { ReactComponent as Icon } from '../assets/svg/writeicon24.svg';
import { ReactComponent as ActiveFeed } from '../assets/svg/active_feed.svg';
import { ReactComponent as Feed } from '../assets/svg/feed.svg';
import { ReactComponent as ActiveProfile } from '../assets/svg/active_profile.svg';
import { ReactComponent as Profile } from '../assets/svg/profile.svg';

const Navigation = () => {
  return (
    <NavContainer>
      {/* <BottomBack /> */}
      <img style={{ width: '100%', height: '100%' }} src={BottomBg} />
      <div style={{ width: '100%', position: 'relative' }}>
        <NavWrapper>
          <NavItem>
            <ActiveFeed />
            <NavItemText>피드</NavItemText>
          </NavItem>
          <NavCenterItem>
            <Icon />
          </NavCenterItem>
          {/* <NavItem>글쓰기</NavItem> */}
          <NavItem>
            <Profile />
            <NavItemText>프로필</NavItemText>
          </NavItem>
        </NavWrapper>
      </div>
    </NavContainer>
  );
};

export default Navigation;

const NavContainer = styled.div`
  position: sticky;
  height: 65px;
  bottom: 0;
  width: 100%;
  /* margin-bottom: 10px; */
`;

const NavWrapper = styled.nav`
  width: 100%;
  position: absolute;
  bottom: 10%;
  z-index: 99999;
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.div`
  flex: 1 1 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  cursor: pointer;
`;

const NavItemText = styled.span`
  font-size: 9px;
  font-weight: 700;
`;

const NavCenterItem = styled.div`
  position: absolute;
  border: 1px solid #5f27ff;
  background-color: #5f27ff;
  border-radius: 50%;
  bottom: 30%;
  transform: translate(-47%, -50%);
  left: 50%;
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
