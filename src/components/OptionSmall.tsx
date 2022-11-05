import { css, FlattenInterpolation, ThemeProps } from 'styled-components';
import OptionRaw from './OptionsRaw';

type OptionSmallProps = {
  children: React.ReactNode;
  isSelected?: boolean;
  customStyle?: FlattenInterpolation<ThemeProps<unknown>>;
};

function OptionSmall({ children, isSelected, customStyle }: OptionSmallProps) {
  return (
    <OptionRaw isSelected={isSelected} customStyle={OptionSmallStyle(customStyle)}>
      {children}
    </OptionRaw>
  );
}

export default OptionSmall;

const OptionSmallStyle = (customStyle: FlattenInterpolation<ThemeProps<unknown>> | undefined) => css`
  width: 123px;
  height: 40px;
  padding: 0 20px;
  font-size: 14px;
  font-weight: 500;
  ${customStyle};
`;
