import { memo } from "react";
import { Outlet } from "react-router";
import styled from "styled-components";

const Header = styled.div`
  height: 80px;
  background-color: aquamarine;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

const Layout = () => {
  return (
    <div>
      <Header>layout</Header>
      <Outlet />
    </div>
  );
};

export default memo(Layout);
