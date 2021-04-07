import "../Styles/App.css";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import { useState } from "react";
import axios from "axios";
import Title from "./Title";
import { useDispatch, useSelector } from "react-redux";
import View from "./View";
import Likescreen from "./Likescreen";

function App() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [heart, setHeart] = useState(false);
  let view = useSelector((state) => state.view.view);
  let like = useSelector((state) => state.like.like);
  let result;
  const dispatch = useDispatch();

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const setItemSearch = async () => {
    dispatch({
      type: "REMOVE_FROM_BASKETVIEW",
    });
    dispatch({
      type: "REMOVE_FROM_HEARTlIKE",
    });
    dispatch({
      type: "REMOVE_FROM_BASKET",
    });
    setSearch(" ");
    setLoading(true);
    await axios
      .get(`https://itunes.apple.com/search?term=${search}`)
      .then((response) => {
        result = response.data.results;
        setLoading(false);
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            result: result,
          },
        });
      });
  };

  return (
    <div className="app">
      <div className="app__header">
        <img
          src="https://charanmurugan-portfolio.netlify.app/images/cmlogo.jpg"
          alt=""
          className="app__headerImage"
        />
        <input className="app__input" onChange={updateSearch} value={search} />
        <IconButton color="inherit" className="app__searchIcon">
          <Badge color="secondary">
            <SearchIcon onClick={setItemSearch} />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <Badge color="secondary">
            <i
              className="fa fa-heart"
              aria-hidden="true"
              onClick={() => {
                setHeart(heart ? false : true);
              }}
              style={{
                color: "red",
                display: like.length >= 1 ? "block" : "none",
              }}
            ></i>
          </Badge>
          {heart && <Likescreen />}
        </IconButton>
      </div>
      <div className="search__results">
        <Title loading={loading} />
        {view.length === 1 && <View />}
      </div>
    </div>
  );
}

export default App;
