import React, { useContext, useState } from 'react'
import {
  Typography,
  Row,
  Col,
  Avatar,
  Badge,
  Button,
  Dropdown,
  Grid,
} from "antd";
import type { MenuProps } from "antd";
import { BarsOutlined } from "@ant-design/icons";
import {
 itemCenter
} from "../../../layout/LayoutDesign";
import { CartContext } from '../../../context/CartContext';
const { Text, Link } = Typography;
    const { useBreakpoint } = Grid;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Button type="text">
        <Badge count={1}>
          <Avatar shape="square" src="./shopping.svg" />
        </Badge>
      </Button>
    ),
  },
  {
    key: "2",
    label: (
      <Button type="text">
        <Badge count={1}>
          <Avatar shape="square" src="./kitchen.svg" />
        </Badge>
      </Button>
    ),
  },
];
type headerProps = {
  openSideHandeler:()=>void;
};
const HeaderPage = ({ openSideHandeler }: headerProps) => {
  const screen = useBreakpoint();
    const { cartData } = useContext(CartContext);

  const [followers, setFollowers] = useState("+3");
  return (
    <div style={itemCenter}>
      <div>
        <div>
          <Text style={{ fontSize: "24px", marginBottom: "0" }}>
            Welcome to iCloudReady!
          </Text>{" "}
          <br />
          <Text
            style={{ fontSize: "16px", color: "#637182", marginBottom: "0" }}
          >
            You have started your 30 day trial
          </Text>
        </div>
      </div>

      {screen.lg ? (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Avatar
                src="./person3.svg"
                style={{ borderRadius: 0, border: 0 }}
              />
              <Avatar
                src="./person2.svg"
                style={{ marginLeft: "-17px", borderRadius: 0, border: 0 }}
              />
              <Avatar
                src="./person1.svg"
                style={{ marginLeft: "-17px", borderRadius: 0, border: 0 }}
              />
              <Avatar
                src="./person3.svg"
                style={{ marginLeft: "-17px", borderRadius: 0, border: 0 }}
              />
              <Avatar
                src="./vertual-per.svg"
                style={{ marginLeft: "-17px", borderRadius: 0, border: 0 }}
              />
              <Badge
                count={followers}
                style={{
                  top: "50%",
                  left: "-7%",
                  color: "#7C838A",
                  transform: "translate(-50%,-50%)",
                  background: "transparent",
                  boxShadow: " 0 0 0 1px transparent",
                  padding: "0",
                }}
              >
                <Avatar
                  src="./vertual-num.svg"
                  style={{ marginLeft: "-17px", borderRadius: 0, border: 0 }}
                />
              </Badge>
            </div>
            <div>
              <Text
                style={{
                  marginLeft: "17px",
                  fontSize: "20px",
                  marginBottom: "0",
                }}
              >
                Our architects are here to help
              </Text>
              <br />
              <Link
                href="#"
                target="_blank"
                style={{
                  marginLeft: "17px",
                  fontSize: "16px",
                  color: "#0097C2",
                  marginBottom: "0",
                }}
              >
                Book a free session
              </Link>
            </div>
          </div>
          <div>
            <Button
              style={{
                marginRight: "24px",
                padding: 0,
                border: 0,
                background: "transparent",
              }}
            >
              <Badge
                count={cartData.length}
                style={{
                  background: "#ffd900",
                  transform: " translate(-104%, -50%)",
                }}
              >
                <Avatar
                  shape="square"
                  src="./shopping.svg"
                  onClick={openSideHandeler}
                />
              </Badge>
            </Button>
            <Button
              style={{ padding: 0, border: 0, background: "transparent" }}
            >
              {" "}
              <Badge
                count={1}
                style={{
                  background: "#ffd900",
                  transform: " translate(-104%, -50%)",
                }}
              >
                <Avatar
                  shape="square"
                  src="./kitchen.svg"
                  onClick={openSideHandeler}
                />
              </Badge>
            </Button>
          </div>
        </>
      ) : (
        <div>
          {" "}
          <Dropdown menu={{ items }} placement="bottomRight">
            <Button>
              <BarsOutlined />
            </Button>
          </Dropdown>
        </div>
      )}
    </div>
  );
};

export default HeaderPage