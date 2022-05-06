import styled from "@emotion/styled";
import { LeftOutlined } from "@ant-design/icons";
import BgTitle from "../assets/img/bg_title.png";
import { backPage } from "utils/utils";
import { css } from "assets/css/variable";

interface LargeTitleProps {
  title: string;
  hasReturn?: boolean;
}

export const LargeTitle = (props: LargeTitleProps) => {
  return (
    <TitleWrapper>
      <div className="mgt-12 mgb-36">
        {props.hasReturn ? (
          <LeftOutlined onClick={backPage} />
        ) : (
          <div style={{ height: "19.5px" }}></div>
        )}
      </div>
      <span className="title underline">{props.title}</span>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  background-image: url(${BgTitle});
  background-size: cover;
  text-align: left;
  height: 168px;
  width: 100%;
  padding: 32px 16px;

  .title {
    font-size: ${css.fontSizeBig};
    font-weight: bold;
  }
`;
