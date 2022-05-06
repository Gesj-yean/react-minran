import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// order callback() once when mount
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

// get url query param
export const useGetQueryParam = (key: string) => {
  let [searchParams, setSearchParams] = useSearchParams();
  return searchParams.get(key);
};
