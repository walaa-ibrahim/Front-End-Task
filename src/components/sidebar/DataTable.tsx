import { Typography, Avatar, Button } from "antd";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const { Text, Link } = Typography;


const DataTable = () => {
  const { cartData, DeleteHandeler } = useContext(CartContext);
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "16px 16px 15px",
            borderBottom: " 1px solid rgba(194, 202, 212, 0.44)",
          }}
        >
          <div>
            <Text>Product</Text>
          </div>
          <div>
            <Text style={{ marginRight: "27px" }}>Qty</Text>
            <Text>Remove</Text>
          </div>
        </div>

        {cartData.map((el) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "16px 16px 15px",
              borderBottom: " 1px solid rgba(194, 202, 212, 0.44)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar src="./cartMedia.svg"/>
              <div>
                <p style={{ color: "#052346" }}>{el.title}</p>
                <p style={{ color: "#052346" }}>{el.desc}</p>
              </div>
            </div>
            <div>
              <Text style={{ marginRight: "27px" }}>{el.qty}</Text>
              <Button
                onClick={() => DeleteHandeler(el.id)}
                style={{ border: 0, background: "transparent", padding: 0 }}
              >
                {" "}
                <Avatar src="./delete.svg" />
              </Button>
            </div>
          </div>
        ))}
      </>
    );

}
export default DataTable;
