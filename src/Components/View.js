import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import ReactAudioPlayer from "react-audio-player";
import "../Styles/view.css";
function View() {
  let view = useSelector((state) => state.view.view);
  let heart = useSelector((state) => state.click.heart);
  const viewResult = view.length === 1 && view[0].data;
  const dispatch = useDispatch();
  return (
    <div className="view__screen">
      <div>
        {viewResult.trackName && (
          <h3 className="view__trackName">{viewResult.trackName}</h3>
        )}
        <div
          className=" view__like"
          onClick={() => {
            dispatch({
              type: "ADD_TO_HEARTlIKE",
            });
            dispatch({
              type: "ADD_TO_BASKETLIKE",
              item: {
                data: view,
              },
            });
          }}
        >
          <i
            className="fa fa-heart view__heart"
            aria-hidden="true"
            style={{ color: heart ? "red" : "lightblue", fontSize: "30px" }}
          ></i>
        </div>
        <img src={viewResult.artworkUrl100} alt="" className="view__image" />
      </div>

      <div>
        <div className="view__details">
          {viewResult.artistName && (
            <p>
              <em>
                <bold>
                  <strong>Artist Name </strong>
                </bold>
              </em>
              : {viewResult.artistName}
            </p>
          )}

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
                    {viewResult.previewUrl && <strong> Audio Preview </strong>}
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
                    {viewResult.previewUrl && <strong> Video Preview </strong>}
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
