import { css, FlattenInterpolation, ThemeProps } from 'styled-components';
import OptionRaw from './OptionsRaw';

type OptionLargeProps = {
  children: React.ReactNode;
  isSelected?: boolean;
  customStyle?: FlattenInterpolation<ThemeProps<unknown>>;
};

function OptionLarge({ children, isSelected, customStyle }: OptionLargeProps) {
  return (
    <OptionRaw isSelected={isSelected} customStyle={OptionLargeStyle(customStyle)}>
      {children}
    </OptionRaw>
  );
}

export default OptionLarge;

const OptionLargeStyle = (customStyle: FlattenInterpolation<ThemeProps<unknown>> | undefined) => css`
  width: 240px;
  height: 60px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: 700;
  ${customStyle};
`;
