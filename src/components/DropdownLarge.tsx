import styled, { css, FlattenInterpolation, ThemeProps } from 'styled-components';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import useDropdown from '../hooks/useDropdown';
import { DropdownOption } from '../types';
import OptionLarge from './OptionLarge';

type DropdownLargeProps = {
  options: DropdownOption[];
  customStyle?: FlattenInterpolation<ThemeProps<unknown>>;
  onClick?: () => void;
};

function DropdownLarge({ options, customStyle, onClick }: DropdownLargeProps) {
  const { isOpen, selected, handleToggle, handleSelect } = useDropdown(options[0]);

  const handleClick = (option: DropdownOption) => () => {
    handleSelect(option);
    if (onClick) onClick();
  };

  return (
    <Container onClick={handleToggle} customStyle={customStyle}>
      <OptionLarge>
        {selected.content}
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </OptionLarge>

      {isOpen && (
        <OptionsContainer>
          {options.map((option) => (
            <OptionLarge
              key={option.id}
              isSelected={option.id === selected.id}
              onClick={handleClick(option)}
              customStyle={OptionStyle}>
              {option.content}
            </OptionLarge>
          ))}
        </OptionsContainer>
      )}
    </Container>
  );
}

export default DropdownLarge;

const Container = styled.div<{ customStyle?: FlattenInterpolation<ThemeProps<unknown>> | undefined }>`
  position: relative;
  width: 240px;
  min-height: 60px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.grey_100};
  z-index: 10;
  ${({ customStyle }) => customStyle};
`;

const OptionsContainer = styled(Container)`
  position: absolute;
  top: 60px;
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
