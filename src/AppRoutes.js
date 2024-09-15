import React from "react";
import { Route, Routes } from "react-router-dom";
import UseCallBackEx from "./UseCallBackEx";
import UseMemoEx from "./UseMemoEx";
import LifecycleDemo from "./LifecycleDemo";
import CustomHooks from "./CustomHooks";

const AppRoutes = ({USER_TYPES,CURRENT_USER_TYPE}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicElement>
            <UseCallBackEx />
          </PublicElement>
        }
      ></Route>
      <Route
        path="/useMemo"
        element={
          <NormalElement>
            <UseMemoEx />
          </NormalElement>
        }
      ></Route>
      <Route
        path="/lifecycleDemo"
        element={
          <NormalElement>
            <LifecycleDemo />
          </NormalElement>
        }
      ></Route>
      <Route
        path="/customHooks"
        element={
          <AdminElement>
            <CustomHooks />
          </AdminElement>
        }
      ></Route>
      <Route path="*" element={<div>Page Not Found</div>}></Route>
    </Routes>
  );


  function PublicElement({ children }) {
    return <>{children}</>;
  }
  
  function NormalElement({ children }) {
    if (
      CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER ||
      CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER
    ) {
      return <>{children}</>;
    } else {
      return <>Not Accessible</>;
    }
  }
  
  function AdminElement({ children }) {
    if (CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER) {
      return <>{children}</>;
    } else {
      return <>Not Accessible</>;
    }
  }
};


export default AppRoutes;
