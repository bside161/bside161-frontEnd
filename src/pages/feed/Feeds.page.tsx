import { Header } from '../../components/Header/Header';

const Feeds = () => {
  return (
    <>
      <Header>
        <Header.Item>테스트</Header.Item>
        <Header.Item>메뉴스</Header.Item>
      </Header>
      Feed.page
      <div>tstestets</div>
      {Array(100)
        .fill(100)
        .map((arr) => {
          return <div>{arr}</div>;
        })}
    </>
  );
};

export default Feeds;
