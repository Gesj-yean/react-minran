import styled from "@emotion/styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import BgTitle from "../assets/img/bg_title.png";

export const LargeTitle = ({
  title,
  hasReturn,
}: {
  title: string;
  hasReturn: boolean;
}) => {
  return (
    <TitleWrapper className="pd-32">
      <div className="mgt-12 mgb-36">
        {hasReturn ? (
          <ArrowBackIosIcon sx={{ fontSize: 17 }}></ArrowBackIosIcon>
        ) : null}
      </div>
      <Title>
        <span className="underline">{title}</span>
      </Title>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  background-image: url(${BgTitle});
  background-size: cover;
`;
const Title = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
`;
