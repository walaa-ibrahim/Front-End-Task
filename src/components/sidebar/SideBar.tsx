import React from "react";
import { itemCenter } from "../../layout/LayoutDesign";
import { Avatar, Typography } from "antd";
import DataTable from "./DataTable";
import Payment from "./Payment";

const { Text, Link } = Typography;
type sidebarProps = {
  openSideHandeler: () => void;
};
const SideBar = ({ openSideHandeler }: sidebarProps) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          borderBottom: " 1px solid rgba(194, 202, 212, 0.44)",
          minHeight: "90px",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
        }}
      >
        <div>
          <Avatar
            src="./close.svg"
            onClick={openSideHandeler}
            style={{ cursor: "pointer" }}
          />
          <Text style={{ marginLeft: "13px" }}>Your Run Cart</Text>
        </div>
        <div>
          <Text>Requests inyour run cart</Text>
          {/* <Avatar src="./close.svg" onClick={openSideHandeler} /> */}
        </div>
      </div>
      <DataTable />
      <Payment />
    </>
  );
};

export default SideBar;
