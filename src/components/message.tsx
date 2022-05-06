import styled from "@emotion/styled";
import { css } from "assets/css/variable";
import { MessageType } from "types/message";
import iconComment from "assets/img/icon_comment.png";
import iconLike from "assets/img/icon_like.png";
import iconLikeLight from "assets/img/icon_like_light.png";
import iconStar from "assets/img/icon_star.png";
import iconStarLight from "assets/img/icon_star_light.png";
import { HeaderType } from "views/home/home";

interface MessageProp {
  info: MessageType;
  current: HeaderType;
}

export const Message = ({ info, current }: MessageProp) => {
  const MessageState = () => {
    return current === "recommend" ? (
      info.isFollow ? (
        <FollowBtn className="follow-btn">已关注</FollowBtn>
      ) : (
        <UnfollowBtn className="unfollow-btn">关注</UnfollowBtn>
      )
    ) : info.isStar ? (
      <img src={iconStarLight} alt="" />
    ) : (
      <img src={iconStar} alt="" />
    );
  };
  return (
    <MessageWrapper>
      <div className="info-header">
        <div className="left">
          <img src="" alt="" />
          <div>{info.userName}</div>
        </div>
        {<MessageState></MessageState>}
      </div>
      <div className="title">{info.title}</div>
      <div className="content">{info.content}</div>
      <div className="info-footer">
        <div className="tag-list-wrapper">
          {info.tag?.map((tag) => (
            <div className="tag-wrapper" key={tag}>
              {tag}
            </div>
          ))}
        </div>
        <div className="function-wrapper">
          <div className="flex">
            <img src={iconComment} alt="" />
            {info.commentNum}
          </div>
          <div className="flex">
            <img src={info.isLike ? iconLikeLight : iconLike} alt="" />
            {info.likeNum}
          </div>
        </div>
      </div>
    </MessageWrapper>
  );
};

const FollowBtn = styled.button`
  border: solid 1px ${css.colorTitleThird};
  color: ${css.colorTitleThird};
  font-size: ${css.fontSizeSmall};
  border-radius: 12px;
  padding: 2px 12px;
  height: 24px;
  background-color: ${css.colorWhite};
`;
const UnfollowBtn = styled(FollowBtn)`
  border: solid 1px ${css.colorPrimary};
  color: ${css.colorPrimary};
`;

const MessageWrapper = styled.div`
  border-radius: 6px;
  background: ${css.colorWhite};
  padding: 10px;

  .info-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    .left {
      display: flex;
      align-items: center;
      img {
        border-radius: 50%;
        height: 30px;
        width: 30px;
        margin-right: 8px;
      }
    }
  }

  .title {
    font-weight: bold;
    margin-bottom: 6px;
  }

  .content {
    color: ${css.colorTitleSecond};
    line-height: 18px;
    margin-bottom: 10px;
  }

  .info-footer {
    display: flex;
    justify-content: space-between;

    .tag-list-wrapper {
      flex: 1;

      .tag-wrapper {
        background-color: ${css.colorGrey};
        border-radius: 4px;
        margin-right: 4px;
        display: inline-block;
        padding: 3px 10px;
      }
    }
    .function-wrapper {
      display: flex;
      color: ${css.colorTitleThird};

      .flex {
        display: flex;
        align-items: center;
        margin-right: 4px;
        img {
          margin-right: 4px;
        }
      }
    }
  }
`;
