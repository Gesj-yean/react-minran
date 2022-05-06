import styled from "@emotion/styled";
import { css } from "assets/css/variable";
import iconSearch from "assets/img/icon_search.png";

export const GlobalSearch = () => {
  return (
    <GlobalSearchWrapper>
      <div className="input-wrapper">
        <img src={iconSearch} alt="" className="mgr-4" />
        <div>搜索你感兴趣的内容</div>
      </div>
    </GlobalSearchWrapper>
  );
};

const GlobalSearchWrapper = styled.div`
  .input-wrapper {
    background-color: ${css.colorWhite};
    color: ${css.colorTitleThird};
    padding: 12px 10px;
    border-radius: 6px;
    line-height: 18px;
    display: flex;
  }
`;
