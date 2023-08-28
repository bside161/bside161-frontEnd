import styled from '@emotion/styled';

const Navigation = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <NavItem>피드</NavItem>
        <NavItem>메시지</NavItem>
        <NavItem>글쓰기</NavItem>
        <NavItem>내프로필</NavItem>
        <NavItem>더보기</NavItem>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navigation;

const NavContainer = styled.div`
  position: sticky;
  height: 65px;
  bottom: 0;
  width: 100%;
  border-top: 1px solid grey;
`;

const NavWrapper = styled.nav`
  display: flex;
`;

const NavItem = styled.div`
  flex: 1 1 auto;
  text-align: center;
`;
