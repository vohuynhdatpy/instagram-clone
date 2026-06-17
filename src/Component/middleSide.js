import React from "react";
import "./middleSide.css";
import story from "../story.json";
import Post from "./Post/post";
import insta from '../assets/logo.png';

const MiddleSide = () => {
  const storys = story.story;
  return (
    <div className="middleHomeSide">
      <div className="mobileTopBar">
        <div className="instalogo">
          <img className="instalogoMobile" src={insta}></img>

        </div>

      </div>
      <div className="storyBlock">
        {storys?.map((item, index) => {
          return (
            <div className="storyParticular">
              <div className="imageDIv">
                <img className="statusImg" src={item.img}></img>
              </div>
              <div className="profileName">{item.name}</div>
            </div>
          );
        })}
      </div>
      <div className="postSection">
        <Post/>
        <Post/>
        <Post/>

        

        
      </div>
    </div>
  );
};

export default MiddleSide;
