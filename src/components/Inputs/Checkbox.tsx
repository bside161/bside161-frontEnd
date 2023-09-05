import styled from '@emotion/styled';
import { colors } from '../../styles/theme.ts';

export type checkboxOptions = { text: string; value: string; checked: boolean };
interface CheckboxProps {
  options: checkboxOptions[];
  onChange: (value: string, newState: boolean) => void;
}

const Checkbox = ({ options, onChange }: CheckboxProps) => {
  return (
    <CheckboxWrapper>
      {options.map((option) => (
        <div key={option.value}>
          <CheckboxInput
            id={option.value}
            name={option.value}
            type="checkbox"
            defaultChecked={option.checked}
            onChange={() => {
              onChange(option.value, option.checked);
            }}
          />
          <CheckboxLabel htmlFor={option.value} checked={option.checked}>
            {option.text}
          </CheckboxLabel>
          {option.checked}
        </div>
      ))}
    </CheckboxWrapper>
  );
};

export default Checkbox;

const CheckboxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const CheckboxInput = styled.input`
  display: none;
`;

const CheckboxLabel = styled.label<{ checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 16px 12px;
  box-sizing: border-box;
  border: 1px solid ${colors.l2};
  border-radius: 6px;
  background-color: ${({ checked }) => (checked ? colors.c1 : colors.w1)};
  color: ${({ checked }) => (checked ? colors.w1 : colors.b4)};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;