import styled from "@emotion/styled";
import { PageTitle } from "components/page-title";
import Success from "assets/img/bg_success.png";
import { Button } from "antd";
export const PaySuccess = () => {
  return (
    <PaySuccessWrapper>
      <PageTitle title="支付结果"></PageTitle>
      <PayContent>
        <img src={Success} alt="" />
        <div className="success-info">支付成功</div>
        <div className="mount">¥1.00</div>
      </PayContent>
      <PayFooter>
        <Button type="primary">完成</Button>
      </PayFooter>
    </PaySuccessWrapper>
  );
};

const PaySuccessWrapper = styled.div`
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
  .mount {
    font-size: 36px;
    font-weight: bold;
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
  }
`;
