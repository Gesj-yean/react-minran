import styled from "@emotion/styled";
import { Avatar, Button } from "antd";
import { css } from "assets/css/variable";
import iconBack from "assets/img/icon_back.png";
import iconShare from "assets/img/icon_share.png";
import { backPage } from "utils/utils";
import { MessageType } from "types/message";
import { useState } from "react";
import { api } from "api/detail";
import { useParams } from "react-router-dom";
import { useMount } from "utils";
import { LoadingOutlined } from "@ant-design/icons";

export const Detail = () => {
  let { messageId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState<MessageType>({
    id: "",
    avatar: "",
    userName: "",
    title: "",
    likeNum: 0,
    commentNum: 0,
    isLike: true,
    isFollow: true,
    isStar: true,
    createTime: "",
    tag: [],
    content: "",
  });

  useMount(() => {
    getContentDetail();
  });

  const getContentDetail = () => {
    setIsLoading(true);
    api
      .messageDetail({ id: messageId })
      .then((res) => {
        setInfo(Object.assign(info, res.data));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleShare = () => {};

  return (
    <Detailwrapper>
      {isLoading ? (
        <div className="loading">
          <LoadingOutlined />
        </div>
      ) : (
        <div>
          <Header>
            <Button type="text" onClick={backPage}>
              <img src={iconBack} className="mgr-12" alt="" />
            </Button>
            <Button type="text" onClick={() => handleShare()}>
              <img src={iconShare} className="mgr-12" alt="" />
            </Button>
          </Header>

          <Content>
            <div className="info-header mgb-12">
              <Avatar src="https://joeschmoe.io/api/v1/random" />
              <div className="mgl-8">
                <div>{info.userName}</div>
                <div className="create-time">{info.createTime}</div>
              </div>
            </div>
            <div className="title mgb-12">{info.title}</div>
            <div className="mgb-12">
              {info.tag &&
                info.tag.map((i) => (
                  <div className="tag" key={i}>
                    {i}
                  </div>
                ))}
            </div>
            <div>{info.content}</div>
          </Content>

          <Comment></Comment>
        </div>
      )}
    </Detailwrapper>
  );
};

const Detailwrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${css.colorBackground};
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 52px 16px 12px;
  border-bottom: solid 1px #e8e8e8;
  background: ${css.colorWhite};
  img {
    width: 16px;
  }
`;

const Content = styled.div`
  margin-bottom: 12px;
  background: ${css.colorWhite};
  padding: 24px 16px 16px;
  line-height: 21px;
  .info-header {
    display: flex;
    .create-time {
      color: ${css.colorTitleThird};
    }
  }
  .title {
    color: ${css.colorTitleFirst};
    font-size: ${css.fontSizeTitle};
    font-weight: bold;
  }
  .tag {
    display: inline-block;
    padding: 3px 10px;
    background: ${css.colorGrey};
  }
`;

const Comment = styled.div`
  background: ${css.colorWhite};
`;
