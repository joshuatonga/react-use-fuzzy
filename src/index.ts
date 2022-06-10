import Fuse from 'fuse.js';
import { useMemo, useState } from 'react';

export interface IFuzzyClient<T> {
  keyword: string;
  result: T[];
  resetSearch: () => void;
  search: (keyword: string) => void;
}

export function useFuzzy<T>(
  data: T[],
  options: Fuse.IFuseOptions<T>,
): IFuzzyClient<T> {
  const [keyword, setKeyword] = useState('');
  const resetSearch = () => setKeyword('');

  const searcher = useMemo(() => {
    const defaultOptions = { tokenize: true, threshold: 0.2 };
    return new Fuse(data, { ...defaultOptions, ...options });
  }, [data, options]);
  const result: T[] = keyword
    ? (searcher.search(keyword) || []).map(r => r.item)
    : data;

  return {
    keyword,
    resetSearch,
    result,
    search: setKeyword,
  };
}

export const useSearch = useFuzzy;
