import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { addDays } from 'date-fns';

const defaultSelected: DateRange = {
  from: undefined,
  to: undefined,
  // to: addDays(pastMonth, 7),
};

function useDatePicker() {
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  return { range, setRange };
}

export default useDatePicker;
