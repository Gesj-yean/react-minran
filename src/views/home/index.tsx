import styled from "@emotion/styled";
import { PayFail } from "components/pay/fail";
import { Pay } from "components/pay/pay";
import { PaySuccess } from "components/pay/success";
import { Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { HomeSearch } from "./home-search";

export const HomeIndex = () => {
  return (
    <HomeWrapper>
      <Routes>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="search" element={<HomeSearch></HomeSearch>}></Route>
        <Route path="pay" element={<Pay></Pay>}></Route>
        <Route path="success" element={<PaySuccess></PaySuccess>}></Route>
        <Route path="fail" element={<PayFail></PayFail>}></Route>
        <Route index element={<Home></Home>}></Route>
      </Routes>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;
