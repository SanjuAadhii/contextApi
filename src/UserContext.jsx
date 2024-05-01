import { createContext, useState } from "react";

let UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [price,setPrice] = useState(0)
  return (
    <UserContext.Provider value={{price,setPrice}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;