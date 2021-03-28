import axios from "axios";

import { Data } from "./types";

export const search = (
  query: string,
  page: number,
  setData: (active: Data) => void,
  setError: (active: { active: boolean; message: string }) => void,
  searched: boolean,
  setSearched: (active: boolean) => void,
  setLoad: (active: boolean) => void,
  resultsPerPage: number,
  sortBy: string,
  exact: boolean
) => {
  axios
    .get(
      `https://api.rawg.io/api/games?key=${process.env.REACT_APP_KEY}&search=${query}&search_precise=true&search_exact=${exact}&page=${page}&page_size=${resultsPerPage}&ordering=${sortBy}`
    )
    .then((response) => {
      setData(response.data);
      //refactor below
      !searched && setSearched(true);
      if (response.data.count === 0) {
        setData({ count: 0, results: [] });
        setError({ active: true, message: "No results found!" });
      } else {
        setError({ active: false, message: "" });
      }
      setLoad(false);
    })
    .catch(() => {
      setError({ active: true, message: "Couldn't connect to server!" });
      setLoad(false);
      setData({ count: 0, results: [] });
    });
};
