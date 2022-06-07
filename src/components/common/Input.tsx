import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';

import {
  checkAuthNumber,
  checkCategoryTitle,
  checkEmail,
  checkNickName,
  checkPassword,
  checkPlanTitle,
  checkRetypedPassword,
} from '@/utils';
import { theme } from '@/style';

type PossibleTypes =
  | 'authNumber'
  | 'categoryTitle'
  | 'date'
  | 'email'
  | 'nickName'
  | 'password'
  | 'planTitle'
  | 'retypedPassword'
  | 'time';

interface InputStyledType {
  widthPx?: string;
  marginTop?: string;
}

interface IProps extends InputStyledType {
  authInput?: number;
  maxLength?: number;
  isValidNickName?: boolean | undefined;
  role: PossibleTypes;
  setCurrentPassword?: Dispatch<SetStateAction<string>>;
  type: string;
  typedPassword?: string;
  widthPx?: string;
  marginTop?: string;
  placeholder?: string;
}

export const Input = ({
  authInput,
  maxLength,
  isValidNickName,
  role,
  setCurrentPassword,
  type,
  typedPassword,
  widthPx,
  marginTop,
  placeholder,
}: IProps) => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const checkInput = () => {
    if (role === 'authNumber' && authInput) {
      return checkAuthNumber(authInput, inputValue, setMessage);
    }
    if (role === 'categoryTitle') {
      return checkCategoryTitle(inputValue, setMessage);
    }
    if (role === 'email') {
      return checkEmail(inputValue, setMessage);
    }
    if (role === 'nickName') {
      return checkNickName(inputValue, isValidNickName, setMessage);
    }
    if (role === 'password' && setCurrentPassword) {
      return checkPassword(inputValue, setCurrentPassword, setMessage);
    }
    if (role === 'planTitle') {
      return checkPlanTitle(inputValue, setMessage);
    }
    if (role === 'retypedPassword' && typedPassword) {
      return checkRetypedPassword(inputValue, setMessage, typedPassword);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  useEffect(() => {
    checkInput();
  }, [inputValue]);

  return (
    <>
      <StyledInput
        onChange={onChange}
        value={inputValue}
        type={type}
        name={role}
        id={role}
        maxLength={maxLength}
        placeholder={placeholder}
        widthPx={widthPx}
        marginTop={marginTop}
        required
      />
      <p>{message}</p>
    </>
  );
};

const StyledInput = styled.input<InputStyledType>`
  width: ${(props) => props.widthPx ?? '313px'};
  margin-top: ${(props) => props.marginTop ?? '12px'};
  height: 28px;
  left: 1167px;
  top: 378px;
  background: #eceff2;
  border-radius: 12px;
  border: none;
  padding: 12px 20px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${theme.colors.Gray400};
  }
  :-ms-input-placeholder {
    color: ${theme.colors.Gray400};
  }
`;
