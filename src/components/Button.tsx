import React from 'react';
import styled, { FlattenInterpolation, ThemeProps } from 'styled-components';

type ButtonProps = {
  children: React.ReactNode;
  customStyle?: FlattenInterpolation<ThemeProps<unknown>>;
  onClick?: () => void;
};

function Button({ children, customStyle, onClick }: ButtonProps) {
  return (
    <ButtonContainer type="button" customStyle={customStyle} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
}

export default Button;

const ButtonContainer = styled.button<{ customStyle: FlattenInterpolation<ThemeProps<unknown>> | undefined }>`
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  color: white;
  ${({ customStyle }) => customStyle}
`;
