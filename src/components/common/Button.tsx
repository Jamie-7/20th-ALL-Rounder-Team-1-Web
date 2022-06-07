import { ComponentPropsWithoutRef } from 'react';
import styled, { SimpleInterpolation } from 'styled-components';

import { theme } from '@/style';

interface InputButtonStyledType {
  background?: string;
  marginTop?: string;
  width?: string;
  color?: string;
  fontSize?: SimpleInterpolation;
}

interface ButtonProps extends ComponentPropsWithoutRef<'button'>, InputButtonStyledType {
  onClick: () => void;
}

export const Button = ({
  type,
  onClick,
  background,
  marginTop,
  width,
  color,
  fontSize,
  children,
  ...restProps
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      background={background}
      marginTop={marginTop}
      width={width}
      color={color}
      fontSize={fontSize}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<InputButtonStyledType>`
  background: ${(props) => props.background ?? theme.colors.WeekandBlue};
  margin-top: ${(props) => props.marginTop ?? '0px'};
  width: ${(props) => props.width ?? '353px'};
  color: ${(props) => props.color ?? '#ECEFF2'};
  ${(props) => props.fontSize}
  height: 60px;
  padding: 0px 24px;
  border-radius: 10px;
`;
