import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';

interface InputProps {
  multiline?: boolean;
  label: string;
  value: string;
  validValue?: boolean;
  placeholder: string;
  limit: number;
  isValid: boolean;
  message?: string;
  hideMessage?: boolean;
  onChange: (value: string) => void;
}

const InputWithLabel = ({
  multiline = false,
  label,
  limit,
  value,
  validValue = false,
  placeholder,
  isValid,
  message,
  hideMessage,
  onChange,
}: InputProps) => {
  const [count, setCount] = useState(0);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = e.target.value.replace(/[^a-zA-Z0-9]/g, '');
    setCount(sanitizedValue.length);
    if (validValue) {
      onChange(sanitizedValue);
    } else {
      onChange(e.target.value);
    }
  };

  return (
    <div>
      <LabelWrapper>
        <Label>{label}</Label>
        <TextLimit>
          <Count>{count}</Count>/{limit}
        </TextLimit>
      </LabelWrapper>

      {multiline ? (
        <TextArea value={value} onChange={handleChange} placeholder={placeholder} maxLength={limit} />
      ) : (
        <Input type="text" value={value} onChange={handleChange} placeholder={placeholder} maxLength={limit} />
      )}
      {!hideMessage && <ValidMessage isValid={isValid}>{message}</ValidMessage>}
    </div>
  );
};

export default InputWithLabel;

const LabelWrapper = styled.div`
  /* position: relative; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  padding-bottom: 12px;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.b9};
  padding-right: 10px;
`;

const TextLimit = styled.div``;

const Count = styled.span`
  color: ${({ theme }) => theme.colors.c1};
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  border-radius: 6px;
  padding: 11px 16px;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid ${({ theme }) => theme.colors.l2};
  outline: none;
  color: ${({ theme }) => theme.colors.b4};
  background: ${({ theme }) => theme.colors.w1};

  &:focus {
    border-color: ${({ theme }) => theme.colors.c1};
  }
`;

const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  border-radius: 6px;
  padding: 11px 16px;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid ${({ theme }) => theme.colors.l2};
  outline: none;
  color: ${({ theme }) => theme.colors.b4};
  background: ${({ theme }) => theme.colors.w1};

  &:focus {
    border-color: ${({ theme }) => theme.colors.c1};
  }
`;

const ValidMessage = styled.p<{ isValid: boolean }>`
  padding-top: 12px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ isValid }) => (isValid ? '#0FC341' : '#E84C4C')};
`;
