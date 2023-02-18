import React from 'react'
import { Typography } from "antd";
const { Text } = Typography;
const Payment = () => {
  return (
    <div
      style={{
        padding: "16px 16px 15px",
        borderBottom: " 1px solid rgba(194, 202, 212, 0.44)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
                  alignItems: "center",
           marginBottom:"15px"
        }}
      >
        <Text>Subtotal</Text>
        <Text>1.00 DTSUs</Text>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
              <Text>New Payment</Text>
        <Text>No, Inclusive in your package</Text>
      </div>
    </div>
  );
}

export default Payment