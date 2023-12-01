import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  //const params = useParams();
  //console.log(params);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return <div className= "px-5">
  <iframe
    width="1200"
    height="700"
    src={"https://www.youtube.com/embed/" + searchParams.get("v")}
    title="| TNPSC | GROUP-4 INTRO CLASS | Suresh IAS Academy"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullscreen
  ></iframe>;</div>;
};

export default WatchPage;

