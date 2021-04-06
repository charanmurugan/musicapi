import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./title.css";
import PaginationPage from "./Pagination";

function Title() {
  let song = useSelector((state) => state.basket.basket);
  const temp = song.length === 1 && song[0].result;
  let view = useSelector((state) => state.view.view);
  const viewResult = view.length === 1 && view[0].data;
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);
  const dispatch = useDispatch();
  // console.log(temp);
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData =
    song.length === 1 && temp.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const viewScreen = (data) => {
    dispatch({
      type: "ADD_TO_BASKETVIEW",
      item: {
        data: data,
      },
    });
  };
  // if (loading) {
  //   <div>Loading</div>;
  // }
  return (
    <div className={view.length === 1 ? "title" : "title1"}>
      {song.length === 1 && (
        <>
          <div>
            {currentData.map((name) => {
              {
                /* console.log(name.trackName.length); */
              }
              return (
                name.trackName && (
                  <div
                    className="title__content"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_HEARTlIKE",
                      });
                      dispatch({
                        type: "REMOVE_FROM_BASKETVIEW",
                      });
                      viewScreen(name);
                    }}
                  >
                    <img src={name.artworkUrl30} alt="" />
                    <div className="title__name">
                      {name.trackName.indexOf("(") > 0
                        ? name.trackName.slice(
                            0,
                            name.trackName.indexOf("(") - 1
                          ).length > 20
                          ? name.trackName.slice(0, 20) + "..."
                          : name.trackName.slice(
                              0,
                              name.trackName.indexOf("(") - 1
                            )
                        : name.trackName.length > 20
                        ? name.trackName.slice(0, 25) + "..."
                        : name.trackName}
                    </div>
                  </div>
                )
              );
            })}
            <PaginationPage
              dataPerPage={dataPerPage}
              totalData={temp.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Title;
