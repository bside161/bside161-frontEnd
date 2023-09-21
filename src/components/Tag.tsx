import styled from '@emotion/styled';

export interface TagProps {
  tags: string[];
  select?: boolean;
}

const Tag = ({ tags, select = false }: TagProps) => {
  return (
    <>
      {tags.map((tag, idx) => (
        <StyledTag key={idx} select={select}>
          {tag}
        </StyledTag>
      ))}
    </>
  );
};

export default Tag;

const StyledTag = styled.div<{ select: boolean }>`
  background-color: ${({ theme, select }) => (select ? theme.colors.c1 : theme.colors.bg1)};
  color: ${({ theme, select }) => (select ? theme.colors.w1 : theme.colors.b9)};
  font-size: 12px;
  font-weight: 500;
  padding: 6px 10px;
  border-radius: 4px;
`;
