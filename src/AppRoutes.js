import React from "react";
import { Route, Routes } from "react-router-dom";
import UseCallBackEx from "./components/UseCallBackEx";
import UseMemoEx from "./components/UseMemoEx";
import LifecycleDemo from "./components/LifecycleDemo";
import CustomHooks from "./components/CustomHooks";
import Testing from "./components/Testing";

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
        path="/testing"
        element={
          <PublicElement>
            <Testing initialCount={0} />
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
