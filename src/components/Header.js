import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({CURRENT_USER_TYPE}) => {
  return (
    <div style={{display:"flex", gap: 12 , padding: 8 , backgroundColor: 'rgb(110,110,210)' , color: "white", marginBottom: "8px"}}>
        <Link style={{color : "white"}} to={"/"}>UseCallBack</Link>
        <Link style={{color : "white"}} to={"/testing"}>Testing In React</Link>
        <Link style={{color : "white"}} to={"/useMemo"}>UseMemo</Link>
        <Link style={{color : "white"}} to={"/lifecycleDemo"}>LifeCycleDemo</Link>
        <Link style={{color : "white"}} to={"/customHooks"}>CustomHooks</Link>
        <div>You are logged in as : {CURRENT_USER_TYPE}</div>
    </div>
  )
}

export default Header