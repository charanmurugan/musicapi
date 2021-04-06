import React from "react";
import { useSelector } from "react-redux";
import "./Like.css";

function Likescreen() {
  let like = useSelector((state) => state.like.like);
  let likeResult = [];
  for (let i = 0; i <= like.length - 1; i++) {
    likeResult[i] = like[i].data[0].data;
  }

  return (
    <div className="likescreen">
      {likeResult.map((name) => {
        {
          return (
            <div className="likescreen__data">
              <img src={name.artworkUrl30} alt="" />
              {name.trackName && (
                <div className="likescreen__name">
                  {name.trackName.indexOf("(") > 0
                    ? name.trackName.slice(0, name.trackName.indexOf("(") - 1)
                        .length > 20
                      ? name.trackName.slice(0, 20) + "..."
                      : name.trackName.slice(0, name.trackName.indexOf("(") - 1)
                    : name.trackName.length > 20
                    ? name.trackName.slice(0, 20) + "..."
                    : name.trackName}
                </div>
              )}
            </div>
          );
        }
      })}
    </div>
  );
}

export default Likescreen;
