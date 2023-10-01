import { useMatch } from 'react-router-dom';

const useRouteMatched = (...paths) => {
  const isMatched = paths.some((path) => useMatch(path));
  return isMatched;
};

export default useRouteMatched;
