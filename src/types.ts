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
  reviews_count: number;
  metacritic: number;
};

export type Data = {
  count: number;
  results: Game[];
};

export type SearchBarProps = {
  setQuery: (active: string) => void;
  searched: boolean;
  setSearched: (active: boolean) => void;
  setPage: (active: number) => void;
};

export type SearchResultsProps = {
  data: Data;
  error: { active: boolean; message: string };
  page: number;
  setPage: (active: number) => void;
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
