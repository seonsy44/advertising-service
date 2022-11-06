import React, { useContext, createContext, useEffect, useState, useMemo } from 'react';
import { AdsService } from '../service/AdsService';
import { Advertisement } from '../types';

type AdsProviderProps = {
  children: React.ReactNode;
  adsService: AdsService;
};

type State = {
  ads: Advertisement[];
  editAd: (edited: Advertisement) => void;
};

const AdsContext = createContext<State | null>(null);
export const useAds = () => useContext(AdsContext);

export function AdsProvider({ children, adsService }: AdsProviderProps) {
  const [ads, setAds] = useState<Advertisement[]>([]);

  const editAd = (edited: Advertisement) => {
    const editedAds = ads.map((ad) => (ad.id === edited.id ? edited : ad));
    setAds(editedAds);
  };

  const getAds = async () => {
    const data = await adsService.get();
    setAds(data);
  };

  useEffect(() => {
    getAds();
  }, []);

  const value = useMemo(() => ({ ads, editAd }), [ads]);

  return <AdsContext.Provider value={value}>{children}</AdsContext.Provider>;
}
