import styled from "@emotion/styled";
import { css } from "assets/css/variable";
import { PageTitle } from "components/page-title";
import iconWxSquare from "assets/img/icon_wx_square.png";
import iconZfbSquare from "assets/img/icon_zfb_square.png";
import { Button } from "antd";

export const Pay = () => {
  return (
    <PayWrapper>
      <PageTitle title="确认支付"></PageTitle>
      <PayContent>
        <div className="amount-wrapper">
          <div>
            <div className="amount">¥1.00</div>
            <div className="amount-desc">支付费用</div>
          </div>
        </div>
        <div className="amount-info">
          <div className="info mgb-8">
            <div className="grey">作者</div>
            <div>THREE 栗子</div>
          </div>
          <div className="info">
            <div className="grey">创作</div>
            <div>咖啡哪有上班苦</div>
          </div>
        </div>
        <div className="title">选择支付方式</div>
        <div className="type-option-wrapper">
          <div className="type-option">
            <div className="left">
              <img src={iconWxSquare} className="mgr-12" alt="" />
              <span>微信支付</span>
            </div>
            <div className="right"></div>
          </div>
          <div className="type-option">
            <div className="left">
              <img src={iconZfbSquare} className="mgr-12" alt="" />
              <span>支付宝支付</span>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </PayContent>
      <PayFooter>
        <div className="footer-center">
          <Button type="primary">立即支付</Button>
          <div className="policy mgt-12">
            点击立即支付即同意《泯然交易协议》
          </div>
        </div>
      </PayFooter>
    </PayWrapper>
  );
};

const PayWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${css.colorBackground};
  display: flex;
  flex-direction: column;
`;

const PayContent = styled.div`
  padding: 16px;

  .amount-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 140px;
    border-radius: 12px;
    background: ${css.colorWhite};
    text-align: center;
    .amount {
      font-size: 36px;
      font-weight: bold;
      line-height: 50px;
    }
    .amount-desc {
      color: ${css.colorTitleThird};
    }
  }

  .amount-info {
    padding: 16px 12px;
    background: ${css.colorWhite};
    border-radius: 12px;
    border-top: dashed 1px ${css.colorBackground};
    .info {
      display: flex;
      justify-content: space-between;
      .grey {
        color: ${css.colorTitleSecond};
      }
    }
  }

  .title {
    font-weight: bold;
    margin: 16px 0 10px;
  }

  .type-option-wrapper {
    padding: 0 10px;
    background: ${css.colorWhite};
    border-radius: 12px;
    .type-option {
      padding: 13px 0;
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        align-items: center;
      }
    }
  }
`;

const PayFooter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 16px;
  .footer-center {
    width: 100%;
    Button {
      width: 100%;
      border-radius: 6px;
      box-shadow: 4px 4px 16px 0px rgba(85, 128, 254, 0.19);
      height: 48px;
    }

    .policy {
      text-align: center;
      color: ${css.colorTitleSecond};
    }
  }
`;
