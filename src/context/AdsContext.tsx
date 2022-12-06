import React, { useContext, createContext, useEffect, useState, useMemo } from 'react';
import { AdsService } from '../service/AdsService';
import { Advertisement, DropdownOption } from '../types';
import { adManagementOptions } from '../utils/conts';

type AdsProviderProps = {
  children: React.ReactNode;
  adsService: AdsService;
};

type State = {
  ads: Advertisement[];
  editAd: (edited: Advertisement) => void;
  filterAd: (adOption: DropdownOption) => void;
  currentOption: DropdownOption;
};

const AdsContext = createContext<State | null>(null);
export const useAds = () => useContext(AdsContext);

export function AdsProvider({ children, adsService }: AdsProviderProps) {
  const [adsRaw, setAdsRaw] = useState<Advertisement[]>([]);
  const [ads, setAds] = useState<Advertisement[]>([]);
  const [currentOption, setCurrentOption] = useState<DropdownOption>(adManagementOptions[0]);

  const filterAd = (adOption: DropdownOption) => {
    setCurrentOption(adOption);

    if (adOption.option === 'all') {
      return setAds(adsRaw);
    }

    setAds(adsRaw.filter((ad) => ad.status === adOption.option));
  };

  const editAd = (edited: Advertisement) => {
    const editedAds = ads.map((ad) => (ad.id === edited.id ? edited : ad));
    setAds(editedAds);
  };

  const getAds = async () => {
    const data = await adsService.get();
    setAdsRaw(data);
    setAds(data);
  };

  useEffect(() => {
    getAds();
  }, []);

  const value = useMemo(() => ({ ads, editAd, filterAd, currentOption }), [ads, currentOption]);

  return <AdsContext.Provider value={value}>{children}</AdsContext.Provider>;
}
