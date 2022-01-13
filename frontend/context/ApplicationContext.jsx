import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie"

const ApplicationContext = createContext();

export const ApplicationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUser = () => {
    if (undefined !== Cookies.get("user")) {
      console.log("get user")
      const savedUser = JSON.parse(Cookies.get("user"));
      setUser(savedUser)
    }
  };

  const saveUser = (user) => {
    console.log("save user")
    Cookies.set("user", JSON.stringify(user), {
      sameSite: "strict",
      secure: process.env.NODE_ENV !== "development",
      path: "/",
    });
    setUser(user);
  };

  const removeUser = () => {
    console.log("remove user")
    Cookies.remove("user")
    setUser(null)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <ApplicationContext.Provider
      value={{
        user,
        setUser:saveUser,
        removeUser
      }}
    >
      {console.log(user)}
      {children}
    </ApplicationContext.Provider>
  );
};

export const ApplicationContextConsumer = ApplicationContext.Consumer;

export default ApplicationContext;
