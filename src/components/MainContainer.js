import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonLists from "./ButtonLists";

const MainContainer = () => {
  return (
    <div className="col-span-11">
      
        <ButtonLists></ButtonLists>
        <VideoContainer></VideoContainer>
      
    </div>
  );
};

export default MainContainer;
