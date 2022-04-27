import { LeftOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { css } from "assets/css/variable";
import { useEffect } from "react";
import { backPage } from "utils/utils";

export const PageTitle = (props: { title: string }) => {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <PageTitleWrapper>
      <div className="content">
        <div className="back-icon" onClick={backPage}>
          <LeftOutlined />
        </div>
        <div>{props.title}</div>
      </div>
    </PageTitleWrapper>
  );
};

const PageTitleWrapper = styled.div`
  background-color: ${css.colorWhite};
  height: 87.5px;
  width: 100%;
  position: relative;

  .content {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;

    .back-icon {
      position: absolute;
      left: 6px;
      bottom: -10px;
      padding: 10px;
    }
  }
`;
