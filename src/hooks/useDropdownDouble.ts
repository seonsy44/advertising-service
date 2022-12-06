/* eslint-disable @typescript-eslint/ban-types */
import { useCallback, useState } from 'react';
import { useTrend } from '../context/TrendContext';
import { DropdownOption } from '../types';

type SelectedOption =
  | { id: number; option?: string | undefined; content: string }
  | { id?: number | undefined; option?: string | undefined; content?: string | undefined }
  | undefined;

function useDropdownDouble() {
  const trends = useTrend();
  const [isOptLeftOpen, setIsOptLeftOpen] = useState(false);
  const [isOptRightOpen, setIsOptRightOpen] = useState(false);
  const [selected, setSelected] = useState<DropdownOption[] | SelectedOption[]>([
    trends?.graphOption[0],
    trends?.graphOption[1],
  ]);

  const handleOptLeftToggle = useCallback(() => {
    setIsOptLeftOpen((cur) => !cur);
  }, []);

  const handleOptRightToggle = useCallback(() => {
    setIsOptRightOpen((cur) => !cur);
  }, []);

  const handleOptLeftSelect = (option: DropdownOption) => {
    setIsOptLeftOpen(true);

    if (option.id === selected[1]?.id) return;

    setSelected(([optLeft, optRight]) => [option, optRight]);
  };

  const handleOptRightSelect = (option: DropdownOption) => {
    setIsOptRightOpen(true);

    if (option.id === selected[0]?.id) return;

    setSelected(([optLeft, optRight]) => [optLeft, option]);
  };

  return {
    isOptLeftOpen,
    isOptRightOpen,
    selected,
    handleOptLeftToggle,
    handleOptRightToggle,
    handleOptLeftSelect,
    handleOptRightSelect,
  };
}

export default useDropdownDouble;
