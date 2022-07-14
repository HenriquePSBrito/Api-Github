import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin-left: 20px;
  display: flex;
  align-items: center;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 2px solid #ccc;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: "#fff";
  margin: 8px; 

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    background-color: rgb(0 191 255);
    font-weight: 900;
    font-size: 20px;
    color: rgb(255 255 255);
    letter-spacing: 2px;
  }

`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid "#ccc";
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }

`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  background-color: #1C1C1C;
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;