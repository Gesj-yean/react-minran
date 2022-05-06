import styled from "@emotion/styled";
import iconSearch from "assets/img/icon_search.png";
import { Button, Input } from "antd";
import { css } from "assets/css/variable";
import { TagList } from "components/tag-list";
import { useState } from "react";
import { api } from "api/home";
import { useGetQueryParam, useMount } from "utils";
import { useNavigate } from "react-router-dom";

export const HomeSearch = () => {
  const tab = useGetQueryParam("tab") || "recommend";
  const navigate = useNavigate();
  const [historyList, setHistoryList] = useState<string[]>([]);
  const [hotList, setHotList] = useState<string[]>([]);
  useMount(() => {
    getHistortList();
    getHotList();
  });
  const getHistortList = () => {
    api.historyList().then((res) => {
      setHistoryList(res.data as string[]);
    });
  };
  const getHotList = () => {
    api.hotList().then((res) => {
      setHotList(res.data as string[]);
    });
  };
  const handleCancel = () => {
    navigate(`/home?tab=${tab}`);
  };

  return (
    <HomeSearchWrapper>
      <div className="flex">
        <Input
          className="input-wrapper"
          placeholder="搜索你感兴趣的内容"
          prefix={<img src={iconSearch} alt="" />}
        />
        <Button type="text" onClick={() => handleCancel()}>
          取消
        </Button>
      </div>
      <div className="title">历史记录</div>
      <TagList list={historyList}></TagList>
      <div className="title">搜索发现</div>
      {hotList.map((item) => (
        <div className="hot-tag">{item}</div>
      ))}
    </HomeSearchWrapper>
  );
};

const HomeSearchWrapper = styled.div`
  padding: 49px 16px 0;

  .flex {
    display: flex;
    justify-content: space-between;
    .input-wrapper {
      border-radius: 22px;
      background-color: ${css.colorGrey};
      border: none;
      Input {
        background-color: transparent;
      }
    }
    Button {
      color: ${css.colorTitleSecond};
    }
  }

  .title {
    font-size: ${css.fontSizeBig};
    margin: 24px 0 16px;
    font-weight: bold;
  }
  .hot-tag {
    display: inline-block;
    width: 50%;
    margin-bottom: 12px;
  }
`;
