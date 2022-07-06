import styled from "@emotion/styled";
import { css } from "assets/css/variable";
import { HeaderType } from "../home";

export const HomeHeader = ({
  current,
  onSelect,
}: {
  current: HeaderType;
  onSelect: (type: HeaderType) => void;
}) => {
  return (
    <HomeHeaderWrapper>
      <div
        className={`${current === "recommend" ? "underline" : ""} mgr-24`}
        onClick={() => onSelect("recommend")}
      >
        推荐
      </div>
      <div
        className={current === "follow" ? "underline" : ""}
        onClick={() => onSelect("follow")}
      >
        关注
      </div>
    </HomeHeaderWrapper>
  );
};

const HomeHeaderWrapper = styled.div`
  padding: 52px 0 24px;
  font-size: ${css.fontSizeTitle};
  div {
    display: inline-block;
  }
  .underline {
    font-weight: bold;
  }
`;
