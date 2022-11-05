import { useCallback, useState } from 'react';
import { DropdownOption } from '../types';

function useDropdown(initOption: DropdownOption) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(initOption);

  const handleToggle = useCallback(() => {
    setIsOpen((cur) => !cur);
  }, []);

  const handleSelect = (option: DropdownOption) => {
    setIsOpen(true);
    setSelected(option);
  };

  return { isOpen, selected, handleToggle, handleSelect };
}

export default useDropdown;
