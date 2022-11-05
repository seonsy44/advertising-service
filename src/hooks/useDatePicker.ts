import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { addDays } from 'date-fns';

const pastMonth = new Date();

const defaultSelected: DateRange = {
  from: pastMonth,
  to: addDays(pastMonth, 0),
};

function useDatePicker() {
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  return { pastMonth, range, setRange };
}

export default useDatePicker;
