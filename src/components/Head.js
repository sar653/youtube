import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch=useDispatch()
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu())
  }
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex-col-span-1">
     <img  onClick={()=>toggleMenuHandler()} className="h-8 cursor-pointer"
        src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        width="70px"
        alt="hamburgar"
      />
      
      <img className="h-8 mx-2"
        src="https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"
        alt="logo"
        width="100px"
      />
      </div>

      <div className="col-span-10">
        <input type="text"></input>
        <button>search</button>
      </div>
      <div className="col-span-1"><img alt="user" 
      src="https://hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
       width="100px"
      ></img></div>
    </div>
  );
};

export default Head;
