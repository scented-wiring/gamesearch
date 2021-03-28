export type Game = {
  name: string;
  background_image: string;
  platforms: {
    platform: {
      name: string;
    };
  }[];
  genres: {
    name: string;
  }[];
  released: string;
  metacritic: number;
};

export type Data = {
  count: number;
  results: Game[];
};

export type SearchBarProps = {
  query: string;
  setQuery: (active: string) => void;
  setData: (active: Data) => void;
  setError: (active: { active: boolean; message: string }) => void;
  searched: boolean;
  setSearched: (active: boolean) => void;
  page: number;
  setPage: (active: number) => void;
  setLoad: (active: boolean) => void;
  resultsPerPage: number;
  sortBy: string;
  exact: boolean;
};

export type SearchResultsProps = {
  data: Data;
  error: { active: boolean; message: string };
  page: number;
  setPage: (active: number) => void;
  query: string;
  setData: (active: Data) => void;
  setError: (active: { active: boolean; message: string }) => void;
  searched: boolean;
  setSearched: (active: boolean) => void;
  setLoad: (active: boolean) => void;
  resultsPerPage: number;
};

export type ParametersProps = {
  setResultsPerPage: (active: number) => void;
  sortBy: string;
  setSortBy: (active: string) => void;
  reverse: boolean;
  setReverse: (active: boolean) => void;
  exact: boolean;
  setExact: (active: boolean) => void;
};
