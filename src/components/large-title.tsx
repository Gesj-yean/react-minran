import styled from "@emotion/styled";
import { LeftOutlined } from "@ant-design/icons";
import BgTitle from "../assets/img/bg_title.png";

interface LargeTitleProps {
  title: string;
  hasReturn?: boolean;
}

export const LargeTitle = (props: LargeTitleProps) => {
  return (
    <TitleWrapper className="pd-32">
      <div className="mgt-12 mgb-36">
        {props.hasReturn ? (
          <LeftOutlined />
        ) : (
          <div style={{ height: "19.5px" }}></div>
        )}
      </div>
      <Title>
        <span className="underline">{props.title}</span>
      </Title>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  background-image: url(${BgTitle});
  background-size: cover;
  text-align: left;
  height: 168px;
  width: 100%;
`;
const Title = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
`;
