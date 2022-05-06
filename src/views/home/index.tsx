import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import { Home } from "./home";

export const HomeIndex = () => {
  return (
    <HomeWrapper>
      <Routes>
        <Route index element={<Home></Home>}></Route>
      </Routes>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;
