import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  const [Cartitems, setCartitems] = useState({});
  const [searchTerm, setSearchTerm] = useState(""); // ✅ NEW: for search functionality

  const Addtocart = (itemid) => {
    if (!Cartitems[itemid]) {
      setCartitems((prev) => ({ ...prev, [itemid]: 1 }));
    } else {
      setCartitems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    }
  };

  const RemovetoCart = (itemid) => {
    setCartitems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in Cartitems) {
      if (Cartitems[item] > 0) {
        let iteminfo = food_list.find((product) => product._id === item);
        totalAmount += iteminfo.price * Cartitems[item];
      }
    }
    return totalAmount;
  };

  const ContextValue = {
    food_list,
    Cartitems,
    Addtocart,
    RemovetoCart,
    setCartitems,
    getTotalCartAmount,
    searchTerm,         // ✅ NEW: expose search term
    setSearchTerm       // ✅ NEW: expose setter for Navbar
  };

  return (
    <StoreContext.Provider value={ContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
