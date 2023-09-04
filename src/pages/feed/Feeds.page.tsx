import { Header } from '../../components/Header/Header';
import { ReactComponent as Filter } from '../../assets/svg/filter.svg';
import styled from '@emotion/styled';

const Feeds = () => {
  return (
    <>
      <Header>
        <Header.Item>NAME</Header.Item>
        <Header.Item>
          <Filter />
        </Header.Item>
      </Header>
      <Wrapper>
        <FeedFixBox>Feed.page</FeedFixBox>
        <div>tstestets</div>
        {Array(100)
          .fill(100)
          .map((arr) => {
            return <div>{arr}</div>;
          })}
      </Wrapper>
    </>
  );
};

export default Feeds;

const Wrapper = styled.section`
  border: 1px solid red;
`;

const FeedFixBox = styled.div`
  padding: 40px 30px;
  border: 1px solid orange;
`;
