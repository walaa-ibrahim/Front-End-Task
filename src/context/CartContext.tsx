import { createContext, useState,useEffect } from "react";

export const CartContext = createContext({} as CartProps);
interface CartProps {
  cartData: { id: string; title: string; desc: string; qty: number }[];
  DeleteHandeler: any;
  itemDeleted:boolean;
}
const CartState = ({ children }: any) => {
  const dataSource = [
    {
      id: "1",
      title: "Smart Checklist",
      desc: "Default Title, 12.00 DTSU",
      qty: 2,
    },
    {
      id: "2",
      title: "Smart Checklist",
      desc: "Default Title, 15.00 DTSU",
      qty: 2,
    },
  ];
  const [cartData, setCartData] = useState([
    { id: "", title: "", desc: "", qty: 0 }
  ]);
    const [itemDeleted,setItemDeleted]=useState(false);
  useEffect(() => {
    setCartData([...dataSource]);
  }, [itemDeleted]);
    const DeleteHandeler= (id:string) => {
        setCartData(cartData.filter((el) => el.id !== id));
        setItemDeleted(true)
}
  return (
    <CartContext.Provider value={{ cartData, DeleteHandeler, itemDeleted }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartState;