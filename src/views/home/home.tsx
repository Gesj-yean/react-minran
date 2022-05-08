import styled from "@emotion/styled";
import { css } from "assets/css/variable";
import { Message } from "components/message";
import { TabBar } from "components/tab-bar";
import { HomeHeader } from "./components/home-header";
import { MessageType } from "types/message";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "api/home";
import { useGetQueryParam, useMount } from "utils";
import iconSearch from "assets/img/icon_search.png";

export type HeaderType = "recommend" | "follow";

export const Home = () => {
  const tab = useGetQueryParam("tab") || "recommend";
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("recommend");
  const [list, setList] = useState<MessageType[]>([]);
  const onSelect = (type: HeaderType) => {
    navigate(`/home?tab=${type}`);
    setCurrentPage(type);
    getList({ type, page: 1, pageSize: 100 });
  };
  const goSeachPage = () => {
    navigate(`search?tab=${tab}`);
  };
  const getList = (prams: {
    type: HeaderType;
    page: number;
    pageSize: number;
  }) => {
    api.homeList(prams).then((res) => {
      setList(res.data as MessageType[]);
    });
  };
  useMount(() => {
    setCurrentPage(tab);
    getList({ type: tab as "recommend", page: 1, pageSize: 100 });
  });

  return (
    <RecommendWrapper className="main-background">
      <RecommendContent>
        <HomeHeader
          current={currentPage as "recommend"}
          onSelect={onSelect}
        ></HomeHeader>
        <SearchWrapper onClick={() => goSeachPage()}>
          <img src={iconSearch} alt="" className="mgr-4" />
          <div>搜索你感兴趣的内容</div>
        </SearchWrapper>
        <MessageWrapper>
          {list.map((item) => (
            <Message
              key={item.id}
              info={item}
              current={currentPage as "recommend"}
            ></Message>
          ))}
        </MessageWrapper>
      </RecommendContent>
      <TabBar currentTab="home"></TabBar>
    </RecommendWrapper>
  );
};

const RecommendWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${css.colorBackground};
`;
const RecommendContent = styled.div`
  flex: 1;
  padding: 0 16px;
`;
const MessageWrapper = styled.div`
  padding: 16px 0;
`;
const SearchWrapper = styled.div`
  background-color: ${css.colorWhite};
  color: ${css.colorTitleThird};
  padding: 12px 10px;
  border-radius: 6px;
  line-height: 18px;
  display: flex;
`;
