import styled, { css, FlattenInterpolation, ThemeProps } from 'styled-components';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import useDropdownDouble from '../hooks/useDropdownDouble';
import { DropdownOption } from '../types';
import OptionSmall from './OptionSmall';
import { flexBox } from '../styles/mixin';

type DropdownDoubleProps = {
  options: DropdownOption[];
  customStyle?: FlattenInterpolation<ThemeProps<unknown>>;
  onOptLeftClick?: (option: DropdownOption) => void;
  onOptRightClick?: (option: DropdownOption) => void;
};

function DropdownDouble({ options, customStyle, onOptLeftClick, onOptRightClick }: DropdownDoubleProps) {
  const {
    isOptLeftOpen,
    isOptRightOpen,
    selected,
    handleOptLeftToggle,
    handleOptRightToggle,
    handleOptLeftSelect,
    handleOptRightSelect,
  } = useDropdownDouble();

  const handleOptLeftClick = (option: DropdownOption) => () => {
    if (onOptLeftClick) onOptLeftClick(option);

    handleOptLeftSelect(option);
  };

  const handleOptRightClick = (option: DropdownOption) => () => {
    if (onOptRightClick) onOptRightClick(option);

    handleOptRightSelect(option);
  };

  return (
    <DoubleContainer>
      <Container onClick={handleOptLeftToggle} customStyle={customStyle}>
        <OptionSmall>
          {selected[0]?.content}
          {isOptLeftOpen ? <FiChevronUp /> : <FiChevronDown />}
        </OptionSmall>

        {isOptLeftOpen && (
          <OptionsContainer>
            {options.map((option) => (
              <OptionSmall
                key={option.id}
                isSelected={option.id === selected[0]?.id || option.id === selected[1]?.id}
                customStyle={OptionStyle}
                onClick={handleOptLeftClick(option)}>
                {option.content}
              </OptionSmall>
            ))}
          </OptionsContainer>
        )}
      </Container>

      <Container onClick={handleOptRightToggle} customStyle={customStyle}>
        <OptionSmall>
          {selected[1]?.content}
          {isOptRightOpen ? <FiChevronUp /> : <FiChevronDown />}
        </OptionSmall>

        {isOptRightOpen && (
          <OptionsContainer>
            <OptionSmall
              key={-1}
              isSelected={selected[0]?.id === -1 || selected[1]?.id === -1}
              customStyle={OptionStyle}
              onClick={handleOptRightClick({ id: -1, content: '선택안함', option: '' })}>
              선택안함
            </OptionSmall>
            {options.map((option) => (
              <OptionSmall
                key={option.id}
                isSelected={option.id === selected[0]?.id || option.id === selected[1]?.id}
                customStyle={OptionStyle}
                onClick={handleOptRightClick(option)}>
                {option.content}
              </OptionSmall>
            ))}
          </OptionsContainer>
        )}
      </Container>
    </DoubleContainer>
  );
}

export default DropdownDouble;

const DoubleContainer = styled.div`
  ${flexBox()}
`;

const Container = styled.div<{ customStyle?: FlattenInterpolation<ThemeProps<unknown>> | undefined }>`
  position: relative;
  width: 123px;
  min-height: 40px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.grey_100};
  z-index: 9;
  ${({ customStyle }) => customStyle};

  & + div {
    margin-left: 10px;
  }
`;

const OptionsContainer = styled(Container)`
  position: absolute;
  top: 40px;
  left: -1px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.grey_100};
`;

const OptionStyle = css`
  background-color: white;
  border-radius: 0;

  & + div {
    border-top: 1px solid ${({ theme }) => theme.grey_100};
  }
`;
