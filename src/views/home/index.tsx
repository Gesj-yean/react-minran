import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { HomeSearch } from "./home-search";

export const HomeIndex = () => {
  return (
    <HomeWrapper>
      <Routes>
        <Route path="search" element={<HomeSearch></HomeSearch>}></Route>
        <Route index element={<Home></Home>}></Route>
      </Routes>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;
