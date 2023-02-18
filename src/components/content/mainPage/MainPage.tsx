import React, { useState } from "react";
import { Row, Col, Avatar, Typography } from "antd";
import { Card } from "antd";
import Content from "../Content";

const { Text, Link } = Typography;

const data = [
  {
    src: "./Customer Engagement.svg",
    header: "Customer Engagement",
    desc: "Get your own mobile app for industry specific",
    dtsu: "100 DTSU*",
    bg: "#0A488F",
  },
  {
    src: "./Actionable Insights.svg",
    header: "Actionable Insighets",
    desc: "Create Dashboards ",
    dtsu: "100 DTSU*",
    bg: "#579064",
  },
  {
    src: "./Employees Productivity.svg",
    header: "Employees Productivity",
    desc: "KPI Builder , Work Conf,Create Oracle Requests",
    dtsu: "100 DTSU*",
    bg: "#950000",
  },
  {
    src: "./Operations Excellence.svg",
    header: "Operations Excellence",
    desc: "Tenant/lessee Managment",
    dtsu: "100 DTSU*",
    bg: "#8F6C0A",
  },
];
const { Meta } = Card;
const MainPage = () => {
  const [pageContent, setPageContent] = useState({ open:false,indx:null})
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "51px 0 31px",
        }}
      >
        <div className="logo">
          <Text style={{ color: "#0097C2" }}>Get Support</Text>
          <Avatar src="./diamond.svg" alt="diamond" />
        </div>
        <div className="bar">
          <Avatar src="./bar.svg" alt="bar" />
        </div>
      </div>
      <Row gutter={16}>
        {data.map((el, indx) => (
          <Col lg={{ span: 6 }} md={{ span: 12 }} xs={{ span: 24 }}>
            <Card
              hoverable
              style={{
                width: "100%",
                border: "1px solid #E7E7E7",
                height: "360px",
                textAlign: "left",
                color: "white",
              }}
              cover={
                <img
                  alt={el.header}
                  src={el.src}
                  style={{
                    maxWidth: "100%",
                    height: "132px",
                    margin: "27px  auto",
                  }}
                />
              }
            >
              <div
                style={{
                  background: el.bg,
                  borderRadius: "8px",
                  padding: "16px 14px 16px 13px",
                  height: "173px",
                  position: "relative",
                }}
              >
                <Meta
                  title={el.header}
                  description={el.desc}
                  style={{ color: "#fff !important" }}
                />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "absolute",
                    bottom: "13px",
                    width: "90%",
                  }}
                >
                  <Text style={{ color: "#fff" }}>{el.dtsu}</Text>
                  <div>
                    <Avatar
                      src="./edit.svg"
                      style={{
                        background: "rgba(0,0,0,.24)",
                        marginRight: "12px",
                      }}
                    />
                    <Avatar
                      src="./add.svg"
                      style={{ background: "rgba(0,0,0,.24)" }}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <div style={{ display: "flex", justifyContent: "end",marginTop:"15px" }}>
        <div style={{ display: "flex", alignItems: "center", marginRight:"10px" }}>
          <Avatar src="./consuming.svg" />
          <Text style={{ margin: "0 10px 0 16px" }}>Remaining DTSUs: </Text>
          <Text>200</Text>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar src="./consumRed.svg" />
          <Text style={{ margin: "0 10px 0 16px" }}>Remaining DTSUs: </Text>
          <Text>350</Text>
        </div>
      </div>
    </>
  );
}

export default MainPage