/* eslint-disable @typescript-eslint/ban-types */
import { useCallback, useState } from 'react';
import { useTrend } from '../context/TrendContext';
import { DropdownOption } from '../types';

type SelectedOption =
  | { id: number; option?: string | undefined; content: string }
  | { id?: number | undefined; option?: string | undefined; content?: string | undefined }
  | undefined;

function useDropdownDouble(initOption: DropdownOption[]) {
  const trends = useTrend();
  const [isOpt1Open, setIsOpt1Open] = useState(false);
  const [isOpt2Open, setIsOpt2Open] = useState(false);
  const [selected, setSelected] = useState<DropdownOption[] | SelectedOption[]>([
    trends?.graphOption[0],
    trends?.graphOption[1],
  ]);

  const handleOpt1Toggle = useCallback(() => {
    setIsOpt1Open((cur) => !cur);
  }, []);

  const handleOpt2Toggle = useCallback(() => {
    setIsOpt2Open((cur) => !cur);
  }, []);

  const handleOpt1Select = (option: DropdownOption) => {
    setIsOpt1Open(true);

    if (option.id === selected[1]?.id) return;

    setSelected(([opt1, opt2]) => [option, opt2]);
  };

  const handleOpt2Select = (option: DropdownOption) => {
    setIsOpt2Open(true);

    if (option.id === selected[0]?.id) return;

    setSelected(([opt1, opt2]) => [opt1, option]);
  };

  return { isOpt1Open, isOpt2Open, selected, handleOpt1Toggle, handleOpt2Toggle, handleOpt1Select, handleOpt2Select };
}

export default useDropdownDouble;
