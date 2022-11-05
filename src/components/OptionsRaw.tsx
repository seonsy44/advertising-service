import React from 'react';
import styled, { FlattenInterpolation, ThemeProps } from 'styled-components';
import { flexBox } from '../styles/mixin';

type OptionRawProps = {
  children: React.ReactNode;
  isSelected?: boolean;
  customStyle?: FlattenInterpolation<ThemeProps<unknown>>;
};

function OptionRaw({ children, isSelected, customStyle }: OptionRawProps) {
  if (isSelected) return <SelectedOption customStyle={customStyle}>{children}</SelectedOption>;

  return <Option customStyle={customStyle}>{children}</Option>;
}

export default OptionRaw;

const Option = styled.div<{ customStyle: FlattenInterpolation<ThemeProps<unknown>> | undefined }>`
  border-radius: 10px;
  ${flexBox('row', 'space-between')};
  cursor: pointer;
  ${({ customStyle }) => customStyle};
`;

const SelectedOption = styled(Option)`
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.grey_50};
`;
