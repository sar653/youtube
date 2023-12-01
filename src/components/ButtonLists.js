import React from "react";
import Button from "./Button.js";

const ButtonLists = () => {
 // const List=["all","gaming",songs,live]
  return (
    <div className="flex">
      <Button name="All"></Button>
      <Button name="Gaming"></Button>
      <Button name="songs"></Button>
      <Button name="live"></Button>
      <Button name="soccer"></Button>
      <Button name="cricket"></Button>
    </div>
  );
};

export default ButtonLists;
