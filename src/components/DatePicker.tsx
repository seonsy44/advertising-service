import styled, { FlattenInterpolation, ThemeProps } from 'styled-components';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { flexBox } from '../styles/mixin';
import useDatePicker from '../hooks/useDatePicker';
import Button from './Button';

type DatePickerProps = {
  customStyle?: FlattenInterpolation<ThemeProps<unknown>>;
  fromDate?: Date;
  toDate?: Date;
  onSetClick: (from: Date | undefined, to: Date | undefined) => () => void;
};

function DatePicker({ customStyle, fromDate, toDate, onSetClick }: DatePickerProps) {
  const { range, setRange } = useDatePicker();

  return (
    <Container customStyle={customStyle}>
      <style>{css}</style>
      <DayPicker
        mode="range"
        defaultMonth={toDate}
        fromDate={fromDate}
        toDate={toDate}
        selected={range}
        onSelect={setRange}
      />
      <Button onClick={onSetClick(range?.from, range?.to)}>확인</Button>
    </Container>
  );
}

export default DatePicker;

const Container = styled.div<{ customStyle: FlattenInterpolation<ThemeProps<unknown>> | undefined }>`
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 8px ${({ theme }) => theme.grey_100};
  background-color: ${({ theme }) => theme.bg_w};
  ${flexBox('column', 'center', 'flex-end')}
  font-size: 15px;
  font-weight: 500;
  z-index: 10;
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
