import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { useTrend } from '../context/TrendContext';

function useDatePicker() {
  const trends = useTrend();
  const [range, setRange] = useState<DateRange | undefined>({
    from: trends?.dateRange.fromDate,
    to: trends?.dateRange.toDate,
  });

  return { range, setRange };
}

export default useDatePicker;
