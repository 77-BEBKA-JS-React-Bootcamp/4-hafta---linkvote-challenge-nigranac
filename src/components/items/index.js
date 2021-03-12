import React from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Items = () => {
  const dispatch = useDispatch();

  const myItems = useSelector((item) => item.item);

  return (
    <div>
      {myItems.map((i, index) => {
        return (
          <div key={index} className="items-container">
            <div className="points-container">
              <p id="point-number">{i.points}</p>
              <p id="point-text">Points</p>
            </div>

            <div className="name-vote-container">
              <button
                id="delete"
                onClick={() =>
                  dispatch({
                    type: "DELETE",

                    payload: {
                      index: index,
                      linkName: i.linkName,
                    },
                  })
                }
              >
                delete
              </button>
              <div className="name-address">
                <p style={{ margin: "0" }}>{i.linkName}</p>
                <p>{i.url}</p>
              </div>
              <div className="down-up">
                <button
                  onClick={() =>
                    dispatch({
                      type: "INCREASE",

                      payload: {
                        index: index,
                        points: i.points,
                      },
                    })
                  }
                >
                  Up Vote
                </button>
                <button
                  onClick={() =>
                    dispatch({
                      type: "DECREASE",
                      payload: {
                        points: i.points,
                        index: index,
                      },
                    })
                  }
                >
                  Down Vote
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { Items };
