import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import ReactAudioPlayer from "react-audio-player";
import "./view.css";
function View() {
  const [clicked, setClicked] = useState(false);
  let view = useSelector((state) => state.view.view);
  const viewResult = view.length === 1 && view[0].data;
  console.log(viewResult);
  return (
    <div className="view__screen">
      <div>
        {viewResult.trackName && (
          <h3 className="view__trackName">{viewResult.trackName}</h3>
        )}
        <div
          className=" view__like"
          onClick={() => {
            setClicked(clicked ? false : true);
          }}
        >
          <i
            className="fa fa-heart view__heart"
            aria-hidden="true"
            style={{ color: clicked ? "red" : "lightblue", fontSize: "30px" }}
          ></i>
        </div>
        <img src={viewResult.artworkUrl100} alt="" className="view__image" />
      </div>

      <div>
        <div className="view__details">
          <p>
            <em>
              <bold>
                <strong>Artist Name </strong>
              </bold>
            </em>
            : {viewResult.artistName}
          </p>
          {viewResult.kind && (
            <p>
              <em>
                <bold>
                  <strong>Kind </strong>
                </bold>
              </em>
              : {viewResult.kind}
            </p>
          )}
          {viewResult.shortDescription && (
            <p>
              <em>
                <bold>
                  <strong>Movie Description </strong>
                </bold>
              </em>
              : {viewResult.shortDescription}
            </p>
          )}
        </div>
        <div>
          {viewResult.kind === "song" ? (
            <div>
              <p className="view_audioPreview">
                <em>
                  <bold>
                    <strong> Audio Preview </strong>
                  </bold>
                </em>
              </p>
              <ReactAudioPlayer
                className="view__audio"
                src={viewResult.previewUrl}
                controls
              />
            </div>
          ) : (
            <div>
              <p className="view_videoPreview">
                <em>
                  <bold>
                    <strong> Video Preview </strong>
                  </bold>
                </em>
              </p>
              <ReactPlayer
                className="view__video"
                url={viewResult.previewUrl}
                controls={true}
                width="500px"
                height="250px"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default View;
