import React from 'react';
import styled, { FlattenInterpolation, ThemeProps } from 'styled-components';
import { flexBox } from '../styles/mixin';

type OptionRawProps = {
  children: React.ReactNode;
  isSelected?: boolean;
  customStyle?: FlattenInterpolation<ThemeProps<unknown>>;
  onClick?: () => void;
};

function OptionRaw({ children, isSelected, customStyle, onClick }: OptionRawProps) {
  if (isSelected)
    return (
      <SelectedOption customStyle={customStyle} onClick={onClick}>
        {children}
      </SelectedOption>
    );

  return (
    <Option customStyle={customStyle} onClick={onClick}>
      {children}
    </Option>
  );
}

export default OptionRaw;

const Option = styled.div<{ customStyle: FlattenInterpolation<ThemeProps<unknown>> | undefined }>`
  ${flexBox('row', 'space-between')};
  border-radius: 10px;
  cursor: pointer;
  ${({ customStyle }) => customStyle};
`;

const SelectedOption = styled(Option)`
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.grey_50};
  ${({ customStyle }) => customStyle};
`;
