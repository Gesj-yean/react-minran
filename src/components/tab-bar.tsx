import styled from "@emotion/styled";
import { css } from "assets/css/variable";
import tab_home from "assets/img/tab_home.png";
import tab_home_light from "assets/img/tab_home_light.png";
import tab_activity from "assets/img/tab_activity.png";
import tab_activity_light from "assets/img/tab_activity_light.png";
import tab_my from "assets/img/tab_my.png";
import tab_my_light from "assets/img/tab_my_light.png";

const tabList = [
  {
    icon: tab_home,
    activeIcon: tab_home_light,
    name: "home",
    title: "首页",
  },
  {
    icon: tab_activity,
    activeIcon: tab_activity_light,
    name: "activity",
    title: "动态",
  },
  {
    icon: tab_my,
    activeIcon: tab_my_light,
    name: "my",
    title: "我的",
  },
];

export const TabBar = ({ currentTab }: { currentTab: string }) => {
  return (
    <TabBarWrapper>
      {tabList.map((tab) => (
        <div key={tab.name} className={currentTab === tab.name ? "active" : ""}>
          <img
            src={currentTab === tab.name ? tab.activeIcon : tab.icon}
            alt=""
          />
          <div style={{ marginTop: "2px" }}>{tab.title}</div>
        </div>
      ))}
    </TabBarWrapper>
  );
};

const TabBarWrapper = styled.div`
  width: 100%;
  height: 83px;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  background-color: ${css.colorWhite};
  padding-top: 10px;
  color: ${css.colorTitleThird};

  .active {
    color: ${css.colorPrimary};
  }
`;
