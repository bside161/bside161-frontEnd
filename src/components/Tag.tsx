import styled from '@emotion/styled';

interface TagProps {
  texts: string[];
}
const Tag = ({ texts }: TagProps) => {
  return <StyledTag>{texts.map((text) => text)}</StyledTag>;
};

export default Tag;

const StyledTag = styled.div``;
