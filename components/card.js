import React from "react";

const Card = (props) => {
  return (
    <div
      className="bg-teal-900
    text-white
    w-3/4
    h-40 
    rounded-lg 
    my-28
    mx-auto
    flex
    flex-col 
     ">
      {props.children}
    </div>
  );
};

export default Card;
