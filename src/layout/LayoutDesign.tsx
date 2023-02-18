import React from "react";

export const headerStyle: React.CSSProperties = {
  color: "#052346",
  minHeight: 90,
  paddingInline: 135,
  lineHeight: "13px",
  background: "#F8F8F8",
};

export const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  paddingInline: 135,
  borderBottom: " 1px solid rgba(194, 202, 212, 0.44)",

  //   lineHeight: "120px",
  color: "#fff",
  backgroundImage: "url(./content-bg.svg)",
  backgroundSize: "cover",
};

export const siderStyle: React.CSSProperties = {
  textAlign: "center",
  // lineHeight: "120px",
  // color: "#fff",

  backgroundColor: "#fff",
};

export const footerStyle: React.CSSProperties = {
  textAlign: "center",
};
export const footerText: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: " 21px",
  letterSpacing: "0em",
};
export const itemCenter: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "100%",
  justifyContent:'space-between'
};
