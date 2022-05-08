import styled from "@emotion/styled";
import { PageTitle } from "components/page-title";
import Fail from "assets/img/bg_fail.png";
import { Button } from "antd";
import { css } from "assets/css/variable";
export const PayFail = () => {
  return (
    <PayFailWrapper>
      <PageTitle title="支付结果"></PageTitle>
      <PayContent>
        <img src={Fail} alt="" />
        <div className="success-info">支付失败</div>
        <div className="desc">支付遇到问题，请尝试重新支付～</div>
      </PayContent>
      <PayFooter>
        <Button type="primary">完成</Button>
      </PayFooter>
    </PayFailWrapper>
  );
};

const PayFailWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const PayContent = styled.div`
  padding-top: 100px;
  text-align: center;
  .success-info {
    margin: 30px 0;
    font-weight: bold;
  }
  .desc {
    color: ${css.colorTitleSecond};
  }
`;

const PayFooter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 38px;
  Button {
    width: 100%;
    border-radius: 24px;
    height: 48px;
    background-color: ${css.colorWarning};
    border: none;
  }
`;
