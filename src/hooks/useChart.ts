import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { ChartData } from 'chart.js';
import { useTrend } from '../context/TrendContext';

function useChart() {
  Chart.register(CategoryScale);

  const trends = useTrend();
  const labels = trends?.trends.map(({ date }) => `${date?.slice(5, 7)}월 ${date?.slice(8, 10)}일`);
  const [option1, option2] = trends?.graphOption || [null, null];

  const data: ChartData<'line', number[] | undefined, string> = {
    labels,
    datasets: [
      {
        type: 'line',
        label: option1?.content,
        backgroundColor: '#4FADF7',
        borderColor: '#4FADF7',
        data: trends?.trends.map((trend) => (option1?.option ? trend[option1?.option] : 0)),
      },
      {
        type: 'line',
        label: (option2?.id !== -1 && option2?.content) || '',
        backgroundColor: option2?.id !== -1 && option2?.content ? '#85DA47' : 'rgba(255, 255, 255, 0)',
        borderColor: option2?.id !== -1 && option2?.content ? '#85DA47' : 'rgba(255, 255, 255, 0)',
        data: trends?.trends.map((trend) => (option2?.option ? trend[option2?.option] : 0)),
      },
    ],
  };

  return { data };
}

export default useChart;
