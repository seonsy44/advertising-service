import styled, { FlattenInterpolation, ThemeProps } from 'styled-components';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { flexBox } from '../styles/mixin';
import useDatePicker from '../hooks/useDatePicker';

type DatePickerProps = {
  customStyle?: FlattenInterpolation<ThemeProps<unknown>>;
};

function DatePicker({ customStyle }: DatePickerProps) {
  const { pastMonth, range, setRange } = useDatePicker();

  return (
    <Container customStyle={customStyle}>
      <style>{css}</style>
      <DayPicker mode="range" fixedWeeks defaultMonth={pastMonth} selected={range} onSelect={setRange} />
    </Container>
  );
}

export default DatePicker;

const Container = styled.div<{ customStyle: FlattenInterpolation<ThemeProps<unknown>> | undefined }>`
  width: 320px;
  height: 340px;
  border-radius: 10px;
  box-shadow: 0 0 8px ${({ theme }) => theme.grey_100};
  background-color: ${({ theme }) => theme.bg_g};
  ${flexBox()}
  font-size: 15px;
  font-weight: 500;
  ${({ customStyle }) => customStyle};
`;

const css = `
.rdp {
    --rdp-cell-size: 40px;
    --rdp-accent-color: #586CF5;
    --rdp-background-color: #e7edff;
    --rdp-accent-color-dark: #586CF5;
    --rdp-background-color-dark: #e7edff;
  }
`;
