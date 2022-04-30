import styled from "@emotion/styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Recommend } from "./recommend";

export const Home = () => {
  return (
    <HomeWrapper>
      <div>111</div>

      {/* <BrowserRouter>
      <div>111</div>
      <Routes>
        <Route path="recommend" element={<Recommend></Recommend>}></Route>
        <Route index element={<Recommend></Recommend>}></Route>
      </Routes>
    </BrowserRouter> */}
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;
