import axios from "axios";

import { Data } from "./components/App";

export const search = (
  query: string,
  page: number,
  setData: (active: Data) => void,
  setError: (active: { active: boolean; message: string }) => void,
  searched: boolean,
  setSearched: (active: boolean) => void
) => {
  axios
    .get(
      `https://api.rawg.io/api/games?key=${process.env.REACT_APP_KEY}&search=${query}&search_precise=true&page=${page}`
    )
    .then((response) => {
      setData(response.data);
      !searched && setSearched(true);
      if (response.data.count === 0) {
        setError({ active: true, message: "No results found!" });
      } else {
        setError({ active: false, message: "" });
      }
    })
    .catch(() => {
      setError({ active: true, message: "Couldn't connect to server!" });
    });
};
